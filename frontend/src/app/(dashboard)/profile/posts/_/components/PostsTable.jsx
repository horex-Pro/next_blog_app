import Empty from "@/components/ui/Empty";
import Table from "@/components/ui/Table";
import { getPosts } from "@/services/postServices";
import React from "react";
import PostRow from "./PostRow";

async function PostsTable({ queries = "" }) {
  const { posts } = await getPosts(queries);

  if (!posts.length) return <Empty resourceName="هیچ پستی" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان</th>
        <th>دسته بندی</th>
        <th>نویسنده</th>
        <th>تاریخ ایجاد</th>
        <th>نوع</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {posts.map((post, index) => {
          return <PostRow key={post._id} post={post} index={index} />;
        })}
      </Table.Body>
    </Table>
  );
}

export default PostsTable;
