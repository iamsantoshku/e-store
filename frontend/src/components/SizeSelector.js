




import React from 'react';

const SizeSelector = ({ availableSizes, selectedSize, setSelectedSize }) => {
  return (
    <div>
      <p className='text-slate-600 font-medium my-1'>Available Sizes:</p>
      <div className='flex gap-2'>
        {availableSizes.map((size) => (
          <button
            key={size}
            className={`border rounded px-2 py-1 ${selectedSize === size ? 'bg-red-600 text-white' : 'text-red-600'}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
