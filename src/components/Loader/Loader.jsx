// # +====================================================================================+ #
// # |====================================  HappyNess  ===================================| #
// # |======================    taskify app - intergration test    =======================| #
// # |======================= Programmer: NDANG ESSI Pierre Junior =======================| #
// # +====================================================================================+ #

// REACT IMPORTS
import React from 'react'
import './loader.scss'

const Loader = ({size = '54px', marginTop = '2rem', bg='#47abcd'}) => {
    return (
        <div class="loader" style={{width:size, height:size, marginTop:marginTop }}>
            <div class="bar1" style={{background:bg, boxShadow:`0 0 3px ${bg}`}}></div>
            <div class="bar2" style={{background:bg, boxShadow:`0 0 3px ${bg}`}}></div>
            <div class="bar3" style={{background:bg, boxShadow:`0 0 3px ${bg}`}}></div>
            <div class="bar4" style={{background:bg, boxShadow:`0 0 3px ${bg}`}}></div>
            <div class="bar5" style={{background:bg, boxShadow:`0 0 3px ${bg}`}}></div>
            <div class="bar6" style={{background:bg, boxShadow:`0 0 3px ${bg}`}}></div>
            <div class="bar7" style={{background:bg, boxShadow:`0 0 3px ${bg}`}}></div>
            <div class="bar8" style={{background:bg, boxShadow:`0 0 3px ${bg}`}}></div>
            <div class="bar9" style={{background:bg, boxShadow:`0 0 3px ${bg}`}}></div>
            <div class="bar10" style={{background:bg, boxShadow:`0 0 3px ${bg}`}}></div>
            <div class="bar11" style={{background:bg, boxShadow:`0 0 3px ${bg}`}}></div>
            <div class="bar12" style={{background:bg, boxShadow:`0 0 3px ${bg}`}}></div>
        </div>
    )
}

export default Loader
