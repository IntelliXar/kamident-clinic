export default function CopyRight() {

  const currentYear = new Date().getFullYear();
  
  return (
    <section className="bg-blue-200 text-center py-4">
      <div>
        <p className="mb-2"> 
          Built on Good Vibes by{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://devcindy.vercel.app" className="font-bold">
             CindyKandie.
          </a>
        </p>
        
        <p>
          &copy; {currentYear} All rights reserved. <br /> 
        </p>
      </div>
    </section>
  );
}
