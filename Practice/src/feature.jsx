export default function Feature() {
  return (
    <section className="w-full py-12 bg-white px-4">
      {/* Standard React approach to global styles in a single file */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
                .font-poppins { font-family: 'Poppins', sans-serif; }
            `,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24 font-poppins">
        {/* Gradient Heading */}
        <h2 className="bg-red-600 text-transparent bg-clip-text text-4xl md:text-4xl text-left font-medium max-w-2xl leading-tight">
          Why do 500+ companies choose to integrate our features?
        </h2>
      </div>
    </section>
  );
}
