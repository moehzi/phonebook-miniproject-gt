import tw from 'twin.macro';

export const PaginationContainer = tw.div`inline-flex items-center -space-x-px`;
export const ButtonPrevious = tw.button`block px-2 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700`;
export const ButtonNext = tw.button`block px-2 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg cursor-pointer hover:text-gray-700 hover:bg-gray-100`;
export const PageNumber = tw.button`px-3 cursor-pointer py-2 leading-tight border border-gray-300 `;
