import PostFrom from "@/components/post-form";
import { createPost } from "@/actions/posts";

export default function NewPostPage() {
  return <PostFrom action={createPost} />;
}
