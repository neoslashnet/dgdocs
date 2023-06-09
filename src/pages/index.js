  /**
   * Copyright (c) 2017-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  import React from "react";
  import classnames from "classnames";
  import Layout from "@theme/Layout";
  import Link from "@docusaurus/Link";
  import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
  import withBaseUrl from "@docusaurus/withBaseUrl";
  import styles from "./styles.module.css";

  const features = [
    {
      title: <>Technical Notes/>,
      imageUrl: "img/notes.jpg",
      description: (
        <>
          I take a lot of notes throughout the day. I'll add technical notes to this site to go back and use as a reference. 
        </>
      )
    },
    {
      title: <>Website Bookmarks</>,
      imageUrl: "img/web.jpg",
      description: (
        <>
          I have too many bookmarks in my browser. I'll use this site to organize them based on projects and other work I'm doing.
        </>
      )
    },
    {
      title: <>Other Technical Resources</>,
      imageUrl: "img/code.jpg",
      description: (
        <>
          When I find useful technical resouces, I'll add here.
        </>
      )
    }
  ];

  function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />"
      >
        <header className={classnames("hero hero--primary", styles.heroBanner)}>
          <div className="container">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className={classnames(
                  "button button--outline button--secondary button--lg",
                  styles.getStarted
                )}
                to={withBaseUrl("docs/doc1")}
              >
                Get Started
              </Link>
            </div>
          </div>
        </header>
        <main>
          {features && features.length && (
            <section className={styles.features}>
              <div className="container">
                <div className="row">
                  {features.map(({ imageUrl, title, description }, idx) => (
                    <div
                      key={idx}
                      className={classnames("col col--4", styles.feature)}
                    >
                      {imageUrl && (
                        <div className="text--center">
                          <img
                            className={styles.featureImage}
                            src={withBaseUrl(imageUrl)}
                            alt={title}
                          />
                        </div>
                      )}
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
      </Layout>
    );
  }

  export default Home;
