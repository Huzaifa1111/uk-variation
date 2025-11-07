"use client"
import { exploreItemsData } from '../data'; // or './data' depending on your structure

export default function ExploreItems() {
  // Destructure data from exploreItemsData
  const {
    styles,
    desktop,
    mobile
  } = exploreItemsData;

	return (
		<section className={styles.sectionClass}>
			{/* Desktop & Tablet Layout */}
			<div className={desktop.gridClass}>
				{/* Large featured card */}
				<div className={`${desktop.featuredCard.class} ${styles.gradient}`}>
					<div className={desktop.featuredCard.content.class}>
						<div
							className='whitespace-normal text-2xl mb-4 leading-tight'
							dangerouslySetInnerHTML={{ __html: desktop.featuredCard.content.title }}
						/>
						<button
							onClick={() => window.open('https://dashboard.naxi.ae/sign-up', '_blank')}
							className={desktop.featuredCard.content.button.class}>
							{desktop.featuredCard.content.button.text}
						</button>
					</div>

					<div className='relative w-full flex'>
						{desktop.featuredCard.images.map((img, index) => (
							<img
								key={index}
								src={img.src}
								alt={img.alt}
								className={img.class}
							/>
						))}
					</div>
				</div>

        {/* Right column */}
        <div className={desktop.rightColumn.class}>
          {/* Top card */}
        {/* Top card */}
<div className={`${desktop.rightColumn.topCard.class} ${styles.gradient}`}>
  <div className="text-left">
    <h3 className="text-xl mb-4 leading-snug w-3/4">
      Exclusive table top<br />and video games.
    </h3>
    <button 
      onClick={() => window.open('https://dashboard.naxi.ae/sign-up', '_blank')}
      className={desktop.rightColumn.topCard.button.class}
    >
      {desktop.rightColumn.topCard.button.text}
    </button>
  </div>
  <img
    src={desktop.rightColumn.topCard.image.src}
    alt={desktop.rightColumn.topCard.image.alt}
    className={desktop.rightColumn.topCard.image.class}
  />
</div>

					{/* Bottom cards */}
					<div className={desktop.rightColumn.bottomCards.class}>
						{desktop.rightColumn.bottomCards.items.map((item) => (
							<div
								key={item.id}
								className={`relative rounded-3xl overflow-hidden shadow-lg flex flex-col justify-between h-[285px] px-8 pt-8 ${styles.gradient}`}>
								<div className='text-left mb-4'>
									<h3 className='font-bold text-xl'>{item.title}</h3>
									<p className='text-sm'>{item.desc}</p>
									<a
										href={item.button.href}
										className={item.button.class}>
										{item.button.text}
									</a>
								</div>
								<div className='flex justify-center'>
									<img
										src={item.image.src}
										alt={item.image.alt}
										className={item.image.class}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Mobile-specific layout */}
			<div className={mobile.gridClass}>
				{/* First Card (Full width) */}
				<div className={`${mobile.firstCard.class} ${styles.gradient}`}>
					<div className='text-left flex flex-col justify-center'>
						<h3
							className='text-base font-semibold mb-2 leading-snug'
							dangerouslySetInnerHTML={{ __html: mobile.firstCard.title }}
						/>
						<button
							onClick={() => window.open('https://dashboard.naxi.ae/sign-up', '_blank')}
							className={mobile.firstCard.button.class}>
							{mobile.firstCard.button.text}
						</button>
					</div>
					<div className='relative flex items-end justify-end'>
						{mobile.firstCard.images.map((img, index) => (
							<img
								key={index}
								src={img.src}
								alt={img.alt}
								className={img.class}
							/>
						))}
					</div>
				</div>

				{/* Second Row */}
				<div className={mobile.secondRow.class}>
					{/* Left Card (66%) */}
					<div className={`${mobile.secondRow.leftCard.class} ${styles.gradient}`}>
						<div className='text-left flex flex-col justify-between h-full py-1'>
							<h3 className='text-[11px] font-semibold leading-tight w-[95%]'>{mobile.secondRow.leftCard.title}</h3>
							<button
								onClick={() => window.open('https://dashboard.naxi.ae/sign-up', '_blank')}
								className={mobile.secondRow.leftCard.button.class}>
								{mobile.secondRow.leftCard.button.text}
							</button>
						</div>
						<img
							src={mobile.secondRow.leftCard.image.src}
							alt={mobile.secondRow.leftCard.image.alt}
							className={mobile.secondRow.leftCard.image.class}
						/>
					</div>

					{/* Right Card (33%) */}
					<div className={`${mobile.secondRow.rightCard.class} ${styles.gradient}`}>
						<div className='text-left flex flex-col justify-between h-full py-5'>
							<h3 className='text-[8px] font-bold leading-tight'>{mobile.secondRow.rightCard.title}</h3>
							<button
								onClick={() => window.open('https://dashboard.naxi.ae/sign-up', '_blank')}
								className={mobile.secondRow.rightCard.button.class}>
								{mobile.secondRow.rightCard.button.text}
							</button>
						</div>
						<img
							src={mobile.secondRow.rightCard.image.src}
							alt={mobile.secondRow.rightCard.image.alt}
							className={mobile.secondRow.rightCard.image.class}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
