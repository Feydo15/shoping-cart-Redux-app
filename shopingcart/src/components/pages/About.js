import logo from "../Home-img/ftcy.jpg";
import did from  "../Home-img/GDG (1).jpg"

export function About() {
    return( <div>
      <h1>About</h1>
        <section id="about">
          <h1 className="heading" style={{ "background-color": "blue" }}>ABOUT US</h1>
          <div id="pic">
          <img src={logo} alt="Logo" />
            <div id="intro">
              <h2>Feydo Top Clothing.co</h2>
              <p>
                "F T C.co" (Feydo Top Clothing.co) is a South African
                collective online apparel store that provide its valued
                customers with a variety of locally manufactured brands that was
                tailored with a 100% fabric from china and several neighbouring
                countries along the southern part of Africa. F T C.co has been
                consistent on bringing a wide variety of brands that are inspired
                by the Ghetto culture and the current fashion trends since 2016.
                <h3>Feature</h3>
                F T C.co can be classified as one of the largest online apparel
                store that provide a wide variety of brand that fit all the
                occasion like cultural, ceremonial and everyday dress, each of
                which can be further classified by gender, age and season. All
                types of brads are created beautifully through combinations of
                art,culture and current fashion trends themes. Women's brand in
                particular are recognized worldwide for the simple yet
                delightful harmony of their short hoodie and shorts. The hoodie,
                which is cropped to the stomach, it makes the waist look so slim
                and increase the cleavage area, while the high waist bum shorts
                makes the lower body look full, creating an attractive balance.
                The cut and drape of the clothing complements not only the
                african female physique but also flatters and fits most other
                body types as well.
                <br />
                The unique brands of F T C.co like "Paniki" that is inspired by
                the Beer bottle cap ,"Ghetto Gravity" that is inspired by the
                life style of the Ghetto from the inner Ghetto of Gauteng and many
                more appear at their greatest when the wearer is in motion. F T
                C.co brands are creative and expressive in their design.
                Another special feature about F T C.co brands is the shape,
                having a slim top and wide bottom, similar to a bell. The crop
                tops should be tight and fitted while the high waist shorts is
                relaxed at the waist level and tight at the bum area. The
                tightly fitting top attractively reflects the shape of the upper
                body. male hoodies have a tight chest area and the jeans are
                mostly slim fit jeans with bucket
 hat or a cap
              </p>
            </div>
          </div>
        </section>
        <section id="about">
         <h1 className="heading" style={{ "background-color": "blue" }}>OUR STYLE</h1>
         <div id="pic">
         <img src={did} alt="Logo" />
           <div id="intro">
             <h2>Feydo Top Clothing.co</h2>
             <p>
               A woman's brands are typically two-piece (a crop top and a high
               waist shorts or a hoodie with a v-shape shorts) with a
               long-sleeved top. The ensemble was traditionally paired with a
               headpiece and special footwear, but now a smartphone and running
               shoes are more common accessories. man brands also feature
               t-shirts and shorts or  track pants also with a hoodie or a base
               ball jacket Our brands designs are still largely bespoke and
               picking one out typically begins at a fabric store. Drawing
               inspiration from the clothes of the Chosun dynasty, which ran
               from 2010 to 2022, Ricky Rick told reporters after the show that
               he "loved traditional south african clothes, materials and
               patterns" and that the timing of the show, Chanel's first in
               South Africa, was just "the right moment to do it." Many will be
               familiar with South African Hip Hop music, or at least the term
               Ghetto-Music, with gangster love (still the most-viewed video on
               YouTube ever) representing South Africa's latest musical mass
               export. Makeup is another. South Africa's skin-care market,
               collectively known as "African-beauty" in Central Africa, is
               already well-established and highly profitable.
             </p>
           </div>
         </div>
       </section>
      </div>)
  }