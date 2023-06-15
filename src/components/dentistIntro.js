export default function DentistIntro() {
	return (
	  <section className="flex flex-col md:flex-row gap-6 justify-between p-5 pb-10 max-w-[800px] mx-[auto]">
		<div className="w-full md:w-[70%] px-4 border-gray-500 md:border-r">
		  <h2 className="font-bold underline text-lg mb-4">Word From The Dentist</h2>
		  <p className="pb-4">
			If you feel unhappy about the appearance of your teeth, our smile transformation team will spend the time to deliver a solution unique to you. Our cosmetic dental care is meant to enhance your smile while at the same time improving your whole-body health."
		  </p>
		  <h2 className="pb-4 text-md">Dr. Dan</h2>
		</div>
		<div className="hidden md:block">
		  <img className="w-full h-64 mr-2 rounded" src="images/pic3.jpeg" alt="" />
		</div>
	  </section>
	);
  }
  
