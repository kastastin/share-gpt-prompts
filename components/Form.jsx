import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
	return (
		<section className="w-full max-w-full flex-start flex-col">
			<h1 className="head_text text-left">
				<span className="blue_gradient">{type} Post</span>
			</h1>

			<p className="max-w-md desc text-left">
				{type} and share amazing prompts with the world, and let your
				imagination run wild with any AI-powered platform
			</p>

			<form
				onSubmit={handleSubmit}
				className="w-full max-w-2xl flex flex-col gap-7 mt-10 glassmorphism"
			>
				<label>
					<span className="font-satoshi text-gray-700 text-base font-semibold">
						Your AI Prompt
					</span>

					<textarea
						required
						placeholder="Write your post here"
						value={post.prompt}
						onChange={(e) => setPost({ ...post, prompt: e.target.value })}
						className="form_textarea "
					/>
				</label>

				<label>
					<span className="font-satoshi text-gray-700 text-base font-semibold">
						Field of Prompt{" "}
						<span className="font-normal">
							(#product, #webdevelopment, #idea, etc.)
						</span>
					</span>

					<input
						required
						type="text"
						placeholder="#Tag"
						value={post.tag}
						onChange={(e) => setPost({ ...post, tag: e.target.value })}
						className="form_input"
					/>
				</label>

				<div className="flex-end mx-3 mb-5 gap-4">
					<Link href="/" className="text-gray-500 text-sm">
						Cancel
					</Link>

					<button
						type="submit"
						disabled={submitting}
						className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
					>
						{submitting ? `${type}ing...` : type}
					</button>
				</div>
			</form>
		</section>
	);
};

export default Form;
