export interface BlogPost {
  title: string;
  content: string;
  image: string;
  user_email: string;
}

export interface Blog {
  id: string;
  title: string;
  content: string;
  image: string;
  user_email: string;
}
export interface BlogDoc {
  data: () => Blog;
  id: string;
}
export interface AllBlogs {
  docs: BlogDoc[];
}
