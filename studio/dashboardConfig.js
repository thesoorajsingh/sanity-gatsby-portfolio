export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '633a9b21ab76de2533647651',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-tr6txxwn',
                  apiId: '6c9e1578-661c-427c-9c4c-12fca7aa3897'
                },
                {
                  buildHookId: '633a9b22ab76de260364753d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-u8hkgmba',
                  apiId: 'c1451fce-ee49-4243-9702-6c5a721cffac'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thesoorajsingh/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-u8hkgmba.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
