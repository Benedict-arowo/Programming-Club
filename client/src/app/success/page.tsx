import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

export default function SuccessPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-50 py-12">
			<div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
				<h1 className="text-3xl font-bold text-blue-800 mb-6">
					Registration Successful!
				</h1>

				<div className="space-y-4 text-gray-700">
					<p>
						Congratulations! You've successfully registered for the
						Achievers University Programming Club. We're thrilled to
						have you join our community of passionate programmers.
					</p>

					<p>
						<strong>What's Next?</strong>
					</p>

					<ul className="list-disc list-inside space-y-2">
						<li>
							We'll be reaching out to you soon via the email
							address you provided.
						</li>
						<li>
							If you've shared a WhatsApp number, you may expect a
							message from us there as well.
						</li>
						<li>
							Once school resumes in January, we'll start working
							together and figuring out our exciting journey
							ahead!
						</li>
					</ul>

					<p>
						In the meantime, enjoy your break! We wish you a Merry
						Christmas and a Happy New Year in advance. Get ready for
						an amazing year of coding, learning, and growth!
					</p>

					<p>
						If you have any questions before we meet, don't hesitate
						to reach out to us.
						{/* at{" "}
						<a
							href="mailto:programmingclub@achieversuniversity.edu.ng"
							className="text-blue-600 hover:underline">
							programmingclub@achieversuniversity.edu.ng
						</a> */}
					</p>
				</div>

				<div className="mt-8">
					<Link to="/">
						<Button className="bg-blue-600 hover:bg-blue-700 text-white">
							Return to Home Page
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
