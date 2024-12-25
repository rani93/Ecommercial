import photo1 from './photo1.jpg';

const HomeSectionCard = ({product}) => {
    return (
        <>
        <div className="flex flex-col overflow-hidden bg-white rounded-lg shadow-lg w-[18rem] mx-3 cursor-pointer item-center border  ">
            <div className="h-[13rem] w-[10rem">
                <img className="object-cover object-top w-full h-full" src={product.imageUrl} alt="photo1" />


            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
                <p className="mt-2 text-sm text-gray-500">{product.title} </p>
            </div>
         </div>
        </>

    )
}

export default HomeSectionCard;