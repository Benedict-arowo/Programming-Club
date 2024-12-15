// import Link from "next/link";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Code, Users, Trophy, Network } from "lucide-react";

export default function LandingPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-50">
			<header className="container mx-auto px-4 py-8">
				<h1 className="text-4xl font-bold text-blue-900">
					Achievers University Programming Club
				</h1>
			</header>

			<main className="container mx-auto px-4">
				{/* Hero Section */}
				<section className="text-center py-20">
					<h2 className="text-5xl font-extrabold text-blue-800 mb-4">
						Code, Collaborate, Conquer
					</h2>
					<p className="text-xl text-blue-600 mb-8">
						Join our community of passionate programmers and take
						your skills to the next level!
					</p>
					<Link to="/register">
						<Button
							size="lg"
							className="bg-teal-500 hover:bg-teal-600 text-white">
							Join the Club
						</Button>
					</Link>
				</section>

				{/* Goals Section */}
				<section className="py-20">
					<h3 className="text-3xl font-bold text-blue-800 mb-8 text-center">
						Our Goals
					</h3>
					<div className="grid md:grid-cols-2 gap-8">
						<Card>
							<CardContent className="p-6">
								<h4 className="text-xl font-semibold text-blue-700 mb-2">
									Learn Together
								</h4>
								<p className="text-blue-600">
									Share knowledge and grow as a community of
									developers.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="p-6">
								<h4 className="text-xl font-semibold text-blue-700 mb-2">
									Build Projects
								</h4>
								<p className="text-blue-600">
									Collaborate on exciting projects and expand
									your portfolio.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="p-6">
								<h4 className="text-xl font-semibold text-blue-700 mb-2">
									Compete & Win
								</h4>
								<p className="text-blue-600">
									Participate in hackathons and coding
									challenges.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="p-6">
								<h4 className="text-xl font-semibold text-blue-700 mb-2">
									Network
								</h4>
								<p className="text-blue-600">
									Connect with like-minded individuals and
									industry professionals.
								</p>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* Features Section */}
				<section className="py-20">
					<h3 className="text-3xl font-bold text-blue-800 mb-8 text-center">
						What We Offer
					</h3>
					<div className="grid md:grid-cols-4 gap-8">
						<div className="flex flex-col items-center">
							<Code size={48} className="text-teal-500 mb-4" />
							<h4 className="text-xl font-semibold text-blue-700 mb-2">
								Coding Workshops
							</h4>
							<p className="text-blue-600 text-center">
								Regular workshops on various programming
								languages and technologies.
							</p>
						</div>
						<div className="flex flex-col items-center">
							<Users size={48} className="text-teal-500 mb-4" />
							<h4 className="text-xl font-semibold text-blue-700 mb-2">
								Peer Learning
							</h4>
							<p className="text-blue-600 text-center">
								Collaborative learning environment to share
								knowledge and skills.
							</p>
						</div>
						<div className="flex flex-col items-center">
							<Trophy size={48} className="text-teal-500 mb-4" />
							<h4 className="text-xl font-semibold text-blue-700 mb-2">
								Competitions
							</h4>
							<p className="text-blue-600 text-center">
								Participate in local and international coding
								competitions.
							</p>
						</div>
						<div className="flex flex-col items-center">
							<Network size={48} className="text-teal-500 mb-4" />
							<h4 className="text-xl font-semibold text-blue-700 mb-2">
								Networking Events
							</h4>
							<p className="text-blue-600 text-center">
								Connect with industry professionals and fellow
								programmers.
							</p>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="text-center py-20">
					<h3 className="text-3xl font-bold text-blue-800 mb-4">
						Ready to Join?
					</h3>
					<p className="text-xl text-blue-600 mb-8">
						Become a part of our thriving programming community
						today!
					</p>
					<Link to="/register">
						<Button
							size="lg"
							className="bg-teal-500 hover:bg-teal-600 text-white">
							Register Now
						</Button>
					</Link>
				</section>
			</main>

			<footer className="bg-blue-900 text-white py-8">
				<div className="container mx-auto px-4 text-center">
					<p>
						&copy; 2024 Achievers University Programming Club. All
						rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}
