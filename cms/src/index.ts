// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    try {
      // Seed About page content if none exists
      const aboutEntity = await strapi.entityService.findMany('api::about.about');
      if (!aboutEntity) {
        await strapi.entityService.create('api::about.about', {
          data: {
            heading: 'Our Approach',
            content: `<p>NOTO was established in Berlin in 2010 with a commitment to creating architecture that responds meaningfully to its context, serves those who inhabit it, and contributes positively to the broader environment.</p><p>We approach each project through careful research and dialogue, seeking to understand the unique conditions of site, program, and client aspirations. Our design process is collaborative and iterative, exploring ideas through drawing, modeling, and material investigation.</p><p>We believe architecture should be both pragmatic and poetic—addressing functional needs while creating spaces that engage the senses and emotions. Our work aims to achieve clarity and coherence through thoughtful composition, material expression, and attention to detail.</p>`,
          },
        });
      }
      // Seed Contact Info if none exists
      const contactEntity = await strapi.entityService.findMany('api::contact-info.contact-info');
      if (!contactEntity) {
        await strapi.entityService.create('api::contact-info.contact-info', {
          data: {
            address: `NOTO Architektur
Torstraße 140
10119 Berlin
Germany`,
            phone: '+49 30 123 45 678',
            email: 'info@noto-architektur.de',
            workingHours: `Montag — Freitag: 9:00 — 18:00
Samstag: Nach Vereinbarung
Sonntag: Geschlossen`,
          },
        });
      }
      // Seed Team Members if none exists
      const existingTeam = await strapi.entityService.findMany('api::team-member.team-member');
      if (!existingTeam || !existingTeam.length) {
        const team = [
          { name: 'Anna Schmidt', role: 'Founding Partner', bio: 'Anna founded NOTO Architecture in 2010 after working with leading firms in Berlin and London. She holds a Master\'s degree from TU Berlin and has lectured at various architecture schools across Europe. Her work focuses on creating spaces that respond sensitively to context while pushing boundaries of material expression.' },
          { name: 'Thomas Weber', role: 'Partner', bio: 'Thomas joined NOTO in 2012 and became partner in 2016. His background in both architecture and engineering brings technical expertise to the practice\'s design process. He has led many of the firm\'s most complex projects and has a particular interest in sustainable building technologies.' },
          { name: 'Maria Krause', role: 'Design Director', bio: 'Maria has been with NOTO since 2014. With a background in both architecture and interior design, she brings a holistic approach to spatial design. Her work is characterized by attention to detail and a deep understanding of the relationship between buildings and their users.' },
          { name: 'Daniel Fischer', role: 'Project Architect', bio: 'Daniel joined NOTO in 2018 after working in Vienna and Copenhagen. He has extensive experience in cultural and public buildings, with a focus on creating inclusive spaces that foster community engagement. His approach combines rigorous technical resolution with poetic spatial qualities.' },
        ];
        for (const member of team) {
          await strapi.entityService.create('api::team-member.team-member', { data: member });
        }
      }
      // Seed Projects if none exists
      const existingProjects = await strapi.entityService.findMany('api::project.project');
      if (!existingProjects || !existingProjects.length) {
        const projects = [
          { title: 'Urban Townhouse', slug: 'urban-townhouse', location: 'Berlin', year: '2023', category: 'Residential', description: 'A contemporary townhouse that balances urban living with private spaces, featuring sustainable materials and innovative use of natural light.' },
          { title: 'Cultural Pavilion', slug: 'cultural-pavilion', location: 'Munich', year: '2022', category: 'Public', description: 'A public cultural space designed to accommodate exhibitions, performances and community events with flexible interior arrangements.' },
          { title: 'Alpine Retreat', slug: 'alpine-retreat', location: 'Bavaria', year: '2021', category: 'Residential', description: 'A mountain home that responds to its dramatic landscape with locally sourced materials and expansive glazing to frame spectacular views.' },
          { title: 'Brick Extension', slug: 'brick-extension', location: 'Hamburg', year: '2022', category: 'Residential', description: 'A minimal brick extension that complements the existing structure while adding contemporary living spaces.' },
          { title: 'Concrete Pavilion', slug: 'concrete-pavilion', location: 'Frankfurt', year: '2021', category: 'Public', description: 'A sculptural concrete pavilion that serves as both a shelter and a landmark in a public park.' },
          { title: 'Glass House', slug: 'glass-house', location: 'Black Forest', year: '2023', category: 'Residential', description: 'A transparent dwelling that blurs the boundaries between interior and exterior, allowing residents to live immersed in nature.' },
          { title: 'Mountain Cabin', slug: 'mountain-cabin', location: 'Austria', year: '2024', category: 'Residential', description: 'A secluded cabin nestled in the mountains, designed with natural timber and expansive windows to connect with the landscape.' },
          { title: 'Urban Loft', slug: 'urban-loft', location: 'Berlin', year: '2023', category: 'Commercial', description: 'A renovated industrial loft converted into collaborative office spaces with a focus on adaptive reuse and loft-style aesthetics.' },
          { title: 'Glass Bridge', slug: 'glass-bridge', location: 'Frankfurt', year: '2022', category: 'Public', description: 'A pedestrian glass bridge offering panoramic views of the city skyline, engineered with high-strength structural glass.' },
        ];
        for (const proj of projects) {
          await strapi.entityService.create('api::project.project', { data: proj });
        }

        // Image import from mapping file
        const fs = require('fs');
        const path = require('path');
        const mappingFile = path.resolve(__dirname, '../../.cursor/image-mapping.json');
        let mappingData;
        try {
          mappingData = JSON.parse(fs.readFileSync(mappingFile, 'utf-8'));
        } catch (err) {
          console.warn('Skipping image import: mapping file not found or invalid', err);
        }
        if (mappingData?.images) {
          for (const img of mappingData.images) {
            if (!img.contentType || !img.entrySlug || !img.field) {
              console.log(`Skipping ${img.path}: incomplete mapping`);
              continue;
            }
            const fileAbs = path.resolve(__dirname, '../../', img.path);
            try {
              const uploadedFiles = await strapi.plugin('upload').service('upload').upload({
                data: {},
                files: { path: fs.createReadStream(fileAbs) },
              });
              const fileEntity = Array.isArray(uploadedFiles) ? uploadedFiles[0] : uploadedFiles;
              console.log(`Uploaded ${img.path} with id ${fileEntity.id}`);

              const uid = `api::${img.contentType}.${img.contentType}`;
              const findParams = ['about', 'contact-info'].includes(img.contentType)
                ? {}
                : { filters: { slug: img.entrySlug } };
              const entries = await strapi.entityService.findMany(uid, findParams);
              if (!entries.length) {
                console.warn(`No entry found for slug ${img.entrySlug} in ${uid}`);
                continue;
              }
              const entry = entries[0];
              const updateData = { [img.field]: fileEntity.id };
              await strapi.entityService.update(uid, entry.id, { data: updateData });
              console.log(`Linked image to ${uid} entry ${entry.id} field ${img.field}`);
            } catch (uploadErr) {
              console.error(`Error processing image ${img.path}:`, uploadErr);
            }
          }
        }
      }
      // -------- fallback placeholder thumbnail (always runs) --------
      try {
        const fs = require('fs');
        const path = require('path');
        const placeholderPath = path.resolve(__dirname, '../../public/placeholder.svg');
        if (fs.existsSync(placeholderPath)) {
          // Check if file already uploaded
          const existingUpload = await strapi.entityService.findMany('plugin::upload.file', {
            filters: { name: 'placeholder.svg' },
          });
          let fileEntity;
          if (existingUpload && existingUpload.length) {
            fileEntity = existingUpload[0];
          } else {
            const uploadedFiles = await strapi.plugin('upload').service('upload').upload({
              data: {},
              files: { path: fs.createReadStream(placeholderPath) },
            });
            fileEntity = Array.isArray(uploadedFiles) ? uploadedFiles[0] : uploadedFiles;
            console.log(`Uploaded placeholder.svg with id ${fileEntity.id}`);
          }

          const allProjects = await strapi.entityService.findMany('api::project.project');
          for (const proj of allProjects) {
            if (!proj.thumbnail) {
              await strapi.entityService.update('api::project.project', proj.id, {
                data: { thumbnail: fileEntity.id },
              });
            }
          }
          console.log('Ensured placeholder thumbnail linked to projects lacking thumbnails');
        }
      } catch (err) {
        console.error('Placeholder thumbnail linking error', err);
      }
      // -------------------------------------------------------------
    } catch (error) {
      console.error('Bootstrap seed error:', error);
    }
  },
};
