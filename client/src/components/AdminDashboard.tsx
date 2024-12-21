import { useEffect, useState } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
// import { Badge } from "./ui/badge";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { server_url } from "../App";

interface Student {
	_id: string;
	first_name: string;
	last_name: string;
	phone_number: string;
	email: string;
	department: string;
	has_computer: boolean;
	skill: string;
	background: string;
	availability: {
		day: string;
		time: string;
		_id: string;
	};
	onboarded?: boolean;
}

const mockStudents: Student[] = [
	{
		_id: "123",
		first_name: "Benedict",
		last_name: "Arowojolu-Alagwe",
		phone_number: "8116646148",
		email: "benedict.arowo@gmail.com",
		department: "Electrical & Electronics Engineering",
		has_computer: true,
		skill: "web_development",
		background: "I think i'm good at it",
		availability: {
			day: "saturday-sunday",
			time: "afternoon",
			_id: "676673aacf3adbbd479ef60a",
		},
		onboarded: false,
	},
];

export default function AdminDashboard() {
	const [students, setStudents] = useState<Student[]>(mockStudents);
	const [selectedStudent, setSelectedStudent] = useState<Student | null>(
		null
	);

	useEffect(() => {
		fetch(`${server_url}/participants`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setStudents(data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleOnboard = (studentId: string) => {
		setStudents(
			students.map((student) =>
				student._id === studentId
					? { ...student, onboarded: true }
					: student
			)
		);
	};

	return (
		<div className="container mx-auto py-10">
			<header className="px-1 sm:px-4 md:px-8">
				<h1 className="text-3xl font-bold mb-1">
					Student Management Dashboard
				</h1>
				<p className="text-sm text-gray-600 mb-5">
					Managing {students.length} Students
				</p>
			</header>

			<main className="md:px-8 sm:px-2 px-0">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Department</TableHead>
							<TableHead>Skill</TableHead>
							{/* <TableHead>Status</TableHead> */}
							<TableHead>Action</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{students.map((student) => (
							<TableRow key={student._id}>
								<TableCell>{`${student.first_name} ${student.last_name}`}</TableCell>
								<TableCell>{student.department}</TableCell>
								<TableCell>
									{student.skill
										.split("-")
										.join(" ")
										.split("_")
										.join(" ")
										.toUpperCase()}
								</TableCell>
								{/* <TableCell>
									<Badge
										variant={
											student.onboarded
												? "destructive"
												: "secondary"
										}>
										{student.onboarded
											? "Onboarded"
											: "Not Onboarded"}
									</Badge>
								</TableCell> */}
								<TableCell>
									<Dialog>
										<DialogTrigger asChild>
											<Button
												variant="outline"
												onClick={() =>
													setSelectedStudent(student)
												}>
												View Details
											</Button>
										</DialogTrigger>
										<DialogContent className="sm:max-w-[425px]">
											<DialogHeader>
												<DialogTitle>
													Student Details
												</DialogTitle>
											</DialogHeader>
											<ScrollArea className="mt-8 max-h-[60vh]">
												{selectedStudent && (
													<div className="space-y-4">
														<p>
															<strong>
																Name:
															</strong>{" "}
															{
																selectedStudent.first_name
															}{" "}
															{
																selectedStudent.last_name
															}
														</p>
														<p>
															<strong>
																Email:
															</strong>{" "}
															{
																selectedStudent.email
															}
														</p>
														<p>
															<strong>
																Phone:
															</strong>{" "}
															{
																selectedStudent.phone_number
															}
														</p>
														<p>
															<strong>
																Department:
															</strong>{" "}
															{
																selectedStudent.department
															}
														</p>
														<p>
															<strong>
																Has Computer:
															</strong>{" "}
															{selectedStudent.has_computer
																? "Yes"
																: "No"}
														</p>
														<p>
															<strong>
																Skill:
															</strong>{" "}
															{
																selectedStudent.skill
															}
														</p>
														<p>
															<strong>
																Background:
															</strong>{" "}
															{
																selectedStudent.background
															}
														</p>
														<p>
															<strong>
																Availability:
															</strong>{" "}
															{selectedStudent.availability.day
																.split("-")
																.join(" and ")}
															,{" "}
															{
																selectedStudent
																	.availability
																	.time
															}
														</p>
														<p>
															<strong>
																Status:
															</strong>{" "}
															{selectedStudent.onboarded
																? "Onboarded"
																: "Not Onboarded"}
														</p>
													</div>
												)}
											</ScrollArea>
											{selectedStudent &&
												!selectedStudent.onboarded && (
													<Button
														className="mt-4"
														onClick={() =>
															handleOnboard(
																selectedStudent._id
															)
														}>
														Onboard Student
													</Button>
												)}
										</DialogContent>
									</Dialog>
									{/* {!student.onboarded && (
										<Button
											variant="default"
											className="ml-2"
											onClick={() =>
												handleOnboard(student._id)
											}>
											Onboard
										</Button>
									)} */}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</main>
		</div>
	);
}
