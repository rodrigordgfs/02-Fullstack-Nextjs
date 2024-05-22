import PostsService from "@src/services/posts/PostsService";
import { withTemplateConfig } from "@src/services/template/withTemplateConfig";
export { default } from "@src/screens/HomeScreen/HomeScreen";

export async function getStaticProps() {
  const posts = await PostsService().getAll()
  console.log(posts);

  return {
    props: await withTemplateConfig({}),
  };
}
