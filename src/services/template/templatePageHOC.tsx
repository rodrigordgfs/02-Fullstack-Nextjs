import Head from "next/head";
import type { TemplateConfig } from "./withTemplateConfig";
import { TemplateConfigProvider } from "./templateConfigContes";

interface templatePageHOCProps {
  title?: string;
}

export default function templatePageHOC(
  Component: (props: any) => JSX.Element,
  templatePageHOCProps: templatePageHOCProps = {}
) {
  return function wrapperComponent(props: { templateConfig: TemplateConfig }) {
    return (
      <>
        <Head>
          <title>
            {templatePageHOCProps?.title
              ? `${templatePageHOCProps.title} | ${props.templateConfig.site.title}`
              : props.templateConfig.site.title}
          </title>
        </Head>
        <TemplateConfigProvider value={props.templateConfig}>
          <Component {...props} />
        </TemplateConfigProvider>
      </>
    );
  };
}
