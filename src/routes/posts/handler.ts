import { NotFoundError } from "elysia";
import db from "../../db";

/**
 * Getting all posts
 */
export async function getPosts() {
	try {
		return await db.post.findMany({ orderBy: { createdAt: "asc" } });
	} catch (e: unknown) {
		console.log(`Error getting posts: ${e}`);
	}
}

/**
 * Getting a post by ID
 */
export async function getPost(id: number) {
	try {
		const post = await db.post.findUnique({
			where: { id },
		});

		if (!post) {
			throw new NotFoundError("Post not found.");
		}

		return post;
	} catch (e: unknown) {
		console.error(`Error finding post: ${e}`);
	}
}

/**
 * Creating a post
 */
export async function createPost(options: { title: string; content: string }) {
	try {
		const { title, content } = options;

		return await db.post.create({ data: { title, content } });
	} catch (e: unknown) {
		console.error(`Error creating post: ${e}`);
	}
}

/**
 * Updating a post
 */
export async function updatePost(
	id: number,
	options: { title?: string; content?: string },
) {
	try {
		const { title, content } = options;

		return await db.post.update({
			where: { id },
			data: {
				...(title ? { title } : {}),
				...(content ? { content } : {}),
			},
		});
	} catch (e: unknown) {
		console.error(`Error updating post: ${e}`);
	}
}

/**
 * Deleting a post
 */
export async function deletePost(options: { id: number }) {
	try {
		const { id } = options;

		return await db.post.delete({
			where: { id },
		});
	} catch (e: unknown) {
		console.error(`Error deleting post: ${e}`);
	}
}
