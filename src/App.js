import React from 'react';
import Navbar from './components/Navbar';
import Blog from './components/Blog';

import travelData from './data'

export default function App() {
  const blog = travelData.map(item => 
  <Blog 
    key={item.id}
    item={item}
  />
  )
  return (
    <div>
      <Navbar />
      <section className="blog__section">
        {blog}
      </section>
    </div>
  );
}
