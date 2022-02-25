import SimpleReactFooter from 'simple-react-footer';
import React, { Component } from 'react';
// import './mainNavigation.css'

class  SimpleFooter extends Component { 

render() {
    const description = " site description is added to your site for search engine optimization (SEO) purposes. The site description text does not appear on your site – it is used by search engines and displays in search engine results. The site description is information about your site and encourages people to visit your site.";
    const title = "website";
    const columns = [
      {
         
        title: "Resources",
          resources: [
              {
                  name: "About",
                  link: "/about"
              },
            //   {
            //       name: "Careers",
            //       link: "/careers"
            //   },
              {
                  name: "Contact",
                  link: "/contact"
              },
            //   {
            //       name: "Admin",
            //       link: "/admin"
            //   }
          ]
      },
    //   {
    //       title: "Legal",
    //       resources: [
    //           {
    //               name: "Privacy",
    //               link: "/privacy"
    //           },
    //           {
    //               name: "Terms",
    //               link: "/terms"
    //           }
    //       ]
    //   },
    //   {
    //       title: "Visit",
    //       resources: [
    //           {
    //               name: "Locations",
    //               link: "/locations"
    //           },
    //           {
    //               name: "Culture",
    //               link: "/culture"
    //           }
    //       ]
    //   }
   ];
   return <SimpleReactFooter 
      description={description} 
      title={title}
      columns={columns}
      linkedin="fluffy_cat_on_linkedin"
      facebook="fluffy_cat_on_fb"
      twitter="fluffy_cat_on_twitter"
      instagram="fluffy_cat_live"
      youtube="UCFt6TSF464J8K82xeA?"
      pinterest="fluffy_cats_collections"
      copyright="webapp"
      iconColor="white"
      backgroundColor="MidnightBlue"
      fontColor="white"
      copyrightColor="darkgrey"
   />;
  };

}

export default SimpleFooter;