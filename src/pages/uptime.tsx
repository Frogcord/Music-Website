import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
      <Layout
        title={`青蛙狀態 - ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
        <iframe src="https://status.mwdmc.dev/status/frogmusic" width="100%" height="800px"></iframe>
      </Layout>
    );
  }
  