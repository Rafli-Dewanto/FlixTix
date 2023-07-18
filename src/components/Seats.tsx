import React from 'react'

export default function Seats({
    selectedSeats,
    handleSeatClick
}: {
    selectedSeats: Array<number>,
    handleSeatClick: (index: number) => void
}) {
    return (
        <div
            style={{ marginLeft: 0 }}
            className="p-4 mt-12 bg-white rounded-lg shadow-xl card shadow-slate-200 mb-12"
        >
            <h3 className="my-4 font-bold">Choose your seats</h3>
            <div className="mt-2 grid grid-cols-6 md:grid-cols-8 gap-2">
                {Array.from({ length: 64 }).map((_, index) => {
                    const seatNumber: number = index + 1;
                    const isSelected = selectedSeats.includes(seatNumber);

                    return (
                        <div
                            key={index}
                            className={`flex ${isSelected ? 'bg-[#43e590] border-[#43e590]' : 'bg-white'
                                } items-center active:bg-[#43e590] active:border-[#43e590] justify-center w-12 h-12 border-2 hover:bg-slate-200 hover:border-slate-400 border-slate-300 rounded-2xl`}
                            onClick={() => handleSeatClick(index)}
                        >
                            {seatNumber}
                        </div>
                    );
                })}
            </div>
        </div>
    )
};
