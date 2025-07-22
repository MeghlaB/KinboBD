import Image from "next/image";
import React from "react";

const NewArrived = () => {
  return (
    <div className="container mx-auto px-4 bg-gray-50">
      <section className="px-6 py-12 bg-white">
        <h2 className="text-3xl font-bold mb-6">New Arrivals</h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button className="px-4 py-1 border border-yellow-500 text-yellow-600 font-semibold rounded-full">
            Clothes
          </button>
          <button className="px-4 py-1 text-gray-600 hover:text-yellow-600">
            Beauty & Health
          </button>
          <button className="px-4 py-1 text-gray-600 hover:text-yellow-600">
            Gadget and Accessories
          </button>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* Product 1 */}
          <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white">
            <Image
              src="/images/image5.jpg"
              alt="Product 1"
              width={300}
              height={300}
              className="mx-auto h-40 object-contain"
            />
            <div className="flex justify-center items-center mt-3">
              <button className="btn bg-yellow-500 text-black">
                Add to Cart
              </button>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">Beauty & Health</p>
              <h3 className="font-semibold text-gray-800">
                BS-MALL Makeup Brushes Premium
              </h3>
              <p className="mt-2 text-lg font-bold text-red-600">$79.00</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white">
            <Image
              src="/images/image6.jpg"
              alt="Product 2"
              width={300}
              height={300}
              className="mx-auto h-40 object-contain"
            />
            <div className="flex justify-center items-center mt-3">
              <button className="btn bg-yellow-500 text-black">
                Add to Cart
              </button>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500"> Clothes</p>
              <h3 className="font-semibold text-gray-800">
                Black Minimalist T-Shirt
              </h3>
              <p className="mt-2 text-lg font-bold text-red-600">$79.00</p>
            </div>
          </div>

          {/* Product 3 - Sale + Timer */}
          <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white relative">
            <div className="relative">
              <Image
                src="/images/image9.jpg"
                alt="Product 3"
                width={300}
                height={300}
                className="mx-auto h-40 object-contain"
              />
              <div className="flex justify-center items-center mt-3">
                <button className="btn bg-yellow-500 text-black">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500"> Beauty & Health</p>
              <h3 className="font-semibold text-gray-800">
                Sunset Bloom Palette
              </h3>
              <p className="mt-2 text-lg text-red-600 font-bold">$39.00 </p>
            </div>
          </div>

          {/* Product 4 - Sale + Timer */}
          <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white relative">
            <div className="relative">
              <Image
                src="/images/image10.jpg"
                alt="Product 4"
                width={300}
                height={300}
                className="mx-auto h-40 object-contain"
              />
              <div className="flex justify-center items-center mt-3">
                <button className="btn bg-yellow-500 text-black">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">Gadget and Accessories</p>
              <h3 className="font-semibold text-gray-800">
                Samsung S22 Ulta Pro
              </h3>
              <p className="mt-2 text-lg text-red-600 font-bold">$39.00 </p>
            </div>
          </div>

          {/* Product 5 */}
          <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white">
            <Image
              src="/images/image8.jpg"
              alt="Product 5"
              width={300}
              height={300}
              className="mx-auto h-40 object-contain"
            />
            <div className="flex justify-center items-center mt-3">
              <button className="btn bg-yellow-500 text-black">
                Add to Cart
              </button>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500"> Beauty & Health</p>
              <h3 className="font-semibold text-gray-800">Blush Blossom</h3>
              <p className="mt-2 text-lg font-bold text-red-600">$29.00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewArrived;
