const features = [
    { name: 'Origin', description: 'The concept of mobile applications can be traced back to the introduction of the first handheld devices and personal digital assistants (PDAs) in the 1990s.' },
    { name: 'Material', description: '' },
    { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Finish', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, nostrum.' },
    { name: 'Includes', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, nostrum.' },
    { name: 'Considerations', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, nostrum.' },
]

export default function Example() {
    return (
        <div className="bg-transparent" id="specification">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">Technical Specifications</h2>
                    <p className="mt-4 text-gray-500">
                        UI/UX specialist skilled in crafting engaging and responsive user interfaces, with expertise in web development using React for frontend and Node.js for backend, ensuring seamless design-to-implementation experiences.
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-600">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img
                        src="/MA.jpg"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="rounded-xl bg-transparent shadow-2xl shadow-purple-400  hover:scale-110 transition-all duration-500"
                    />
                    <img
                        src="/MA1.jpg"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        className="rounded-xl bg-transparent shadow-2xl shadow-purple-400  hover:scale-110 transition-all duration-500"
                    />
                    <img
                        src="/web1.jpg"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        className="rounded-xl bg-transparent shadow-2xl shadow-purple-400  hover:scale-110 transition-all duration-500"
                    />
                    <img
                        src="/programming.jpg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        className="rounded-xl bg-transparent shadow-2xl shadow-purple-400  hover:scale-110 transition-all duration-500"
                    />
                </div>
            </div>
        </div>
    )
}
