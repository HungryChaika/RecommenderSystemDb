import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2MjciLCJuYmYiOjE2NTAyODUyNTksImV4cCI6MTY1Mjg3NzI1OSwiaWF0IjoxNjUwMjg1MjU5fQ.YFb1YJdWQRFoqHhuIGDlusJcqLvEyDwcvAovbqj2O68';

export const getStaticProps = async () => {
  const res = await fetch('https://api.aniapi.com/v1/random/anime/5/true', {
    method: 'GET',
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });
  const animeFromTheApi = await res.json();
  return {
    props: {
      animeFromTheApi,
    },
  };
}

export default function IndexPage( { animeFromTheApi } ) {
  //console.log(animeFromTheApi);
  /* 
  animeFromTheApi.data.map((item) => {
    console.log(item.titles.rj);
  });
 */
  return (
    <div>
      {animeFromTheApi.data.map((item) => {
        return <p key={item.id} >{item.titles.rj}</p>
      })}
    </div>
  )
}



