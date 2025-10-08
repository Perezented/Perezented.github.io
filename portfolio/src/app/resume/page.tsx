
export default function ResumeDownload() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<div className="max-w-xl w-full px-4 sm:px-6 lg:px-8 text-center">
				<h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Download My Resume</h1>
				<p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
					You can download my resume in PDF or Word format below.
				</p>
				<div className="flex gap-6 items-center justify-center">
					<a
						href="/Michael Perez-Resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:from-blue-500 hover:via-purple-400 hover:to-pink-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
					>
						Download PDF
					</a>
					<a
						href="/Michael Perez Resume.docx"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:from-blue-500 hover:via-purple-400 hover:to-pink-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
					>
						Download Word (.docx)
					</a>
				</div>
			</div>
		</div>
	);
}
