import React from "react";
import { Button } from "./ui/button";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div className="bg-white rounded-lg p-8 max-w-md w-full">
				<h2 className="text-2xl font-bold mb-4">{title}</h2>
				{children}
				<Button onClick={onClose} className="mt-4 w-full">
					Close
				</Button>
			</div>
		</div>
	);
}
