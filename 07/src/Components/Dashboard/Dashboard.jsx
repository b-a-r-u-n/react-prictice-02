import React from 'react'
import Posts from '../Posts/Posts'
import postData from '../../Data/Post'
// import tag from '../../Data/Tag'

const Dashboard = () => {
  let d = new Date();
  // console.log(d.toLocaleDateString());
  const tag = ["FishDish", "SeafoodLovers", "FreshCatch", "GrilledFish", "FishTacos", "SeafoodRecipes", "FishCurry", "FishAndChips", "SeafoodPlatter", "FishDinner", "HealthySeafood", "FishFillet", "SeafoodFeast", "FishLovers", "SeafoodDelight", "FishForDinner", "FishCuisine", "SeafoodSpecial", "FishSoup", "FishStew", "Fish Nutrition", "Fish Breeding", "Fish Habitat", "Fish Recipes", "Fish Photography", "Freshwater Fish"];
  return (
    <div className='px-3 flex flex-col sm:flex-row justify-between '>
      <div className='sm:w-[64%] flex flex-col justify-between py-6'>
          <div className='card'>
            <div className=''>
              <img src="https://img.freepik.com/free-photo/crispy-tubtim-fish-salad-thai-food-herb_1150-23406.jpg?t=st=1722274921~exp=1722278521~hmac=494d8beaf88f1fd30088675a50a6e1197d4b0f9306be6c43d7096a75b06f13ba&w=1060" alt="" />
            </div>
            <div className=' px-3 py-2'>
              <h1 className='font-bold text-lg mb-1 uppercase leading-6'>Crispy Tubtim Fish Salad, Thai Food Herb.</h1>
              <p className='text-md font-semibold mb-2'>
                Title description, <span className='text-gray-500 font-normal'>{d.toLocaleDateString()}</span>
              </p>
              <p className='text-sm'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, repudiandae aut placeat sequi ab impedit asperiores adipisci vel eaque non.
              </p>
              <button className='border border-gray-400 px-3 py-1 font-bold uppercase mt-4'>
                Read More
              </button>
            </div>
          </div>

          <div className='card mt-7'>
            <div>
              <img src="https://img.freepik.com/free-photo/roasted-seabass-with-vegetables_2829-14260.jpg?t=st=1722322995~exp=1722326595~hmac=55e0e47d21d7058ea50dfef23167db60ea44c17fdd9213ca04b2d48f1df10e70&w=1060" alt="" />
            </div>
            <div className=' px-3 py-2'>
              <h1 className='font-bold text-lg mb-1 uppercase leading-6'>Roasted seabass with vegetables</h1>
              <p className='text-md font-semibold mb-2'>
                Title description, <span className='text-gray-500 font-normal'>{d.toLocaleDateString()}</span>
              </p>
              <p className='text-sm'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, repudiandae aut placeat sequi ab impedit asperiores adipisci vel eaque non.
              </p>
              <button className='border border-gray-400 px-3 py-1 font-bold uppercase mt-4'>
                Read More
              </button>
            </div>
          </div>


          <div className='card mt-7 lg:hidden'>
            <div>
              <img src="https://img.freepik.com/free-photo/fish-dish-fried-fish-fillet-with-vegetables_2829-14082.jpg?t=st=1722324994~exp=1722328594~hmac=ef7bfda5809d60c4fef50809f23f5e8e4501301e38d6e1f9a0a13c9deea157f7&w=996" alt="" />
            </div>
            <div className=' px-3 py-2'>
              <h1 className='font-bold text-lg mb-1 uppercase leading-6'>Fish dish - fried fish fillet with vegetables</h1>
              <p className='text-md font-semibold mb-2'>
                Title description, <span className='text-gray-500 font-normal'>{d.toLocaleDateString()}</span>
              </p>
              <p className='text-sm'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, repudiandae aut placeat sequi ab impedit asperiores adipisci vel eaque non.
              </p>
              <button className='border border-gray-400 px-3 py-1 font-bold uppercase mt-4'>
                Read More
              </button>
            </div>
          </div>
      </div>

      <div className='sm:w-1/3 py-6'>
        <div className='card'>
          <img src="https://img.freepik.com/free-photo/fried-fish-carp-fresh-vegetable-salad-wooden-table_2829-19936.jpg?t=st=1722265650~exp=1722269250~hmac=86d25c3e14b07f0ad283bf10bcbaa88f07e9e3531c2e63b3b601b6ca03ae2aee&w=1060" alt="" />
          <div className=' px-3 py-2'>
            <h1 className='text-lg font-bold leading-5'>Fried fish carp and fresh vegetable salad on wooden table.</h1>
            <p className='font-normal text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores rerum facilis perferendis dolor voluptatem accusamus at reiciendis eveniet doloremque. Reiciendis quia minus velit nostrum ipsam, nemo excepturi quo architecto porro.</p>
          </div>
        </div>
        <div className='card mt-5 px-3 py-2'>
          <h1 className='text-lg font-bold'>Popular Posts</h1>
          {
            postData.map((post) => {
              return(
                <Posts key={post.id} post={post}/>
              )
            })
          }
        </div>
        <div className='card mt-5 px-3 py-2'>
          <h1 className='text-lg font-bold mb-4'>Tags</h1>
          <div className='flex gap-2 flex-wrap'>
          {
            tag.map((t) => {
              return (
                <span className='bg-black text-white px-2 py-1 text-sm'>
                  {t}
                </span>
              )
            })
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
