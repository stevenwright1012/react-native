import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import BackgroundImage from './components/BackgroundImage';
import Pokebutton from './components/Pokebutton'


export default class App extends React.Component {
  constructor(){
    super()

    this.state = {
      pokemon: [{number:1, name: "bulbasaur", sprite: require('./components/assets/pokesprites/1.png')},{number:2, name: "ivysaur", sprite: require('./components/assets/pokesprites/2.png')},{number:3, name: "venusaur", sprite: require('./components/assets/pokesprites/3.png')},{number:4, name: "charmander", sprite: require('./components/assets/pokesprites/4.png')},{number:5, name: "charmeleon", sprite: require('./components/assets/pokesprites/5.png')},{number:6, name: "charizard", sprite: require('./components/assets/pokesprites/6.png')},{number:7, name: "squirtle", sprite: require('./components/assets/pokesprites/7.png')},{number:8, name: "wartortle", sprite: require('./components/assets/pokesprites/8.png')},{number:9, name: "blastoise", sprite: require('./components/assets/pokesprites/9.png')},{number:10, name: "caterpie", sprite: require('./components/assets/pokesprites/10.png')},{number:11, name: "metapod", sprite: require('./components/assets/pokesprites/11.png')},{number:12, name: "butterfree", sprite: require('./components/assets/pokesprites/12.png')},{number:13, name: "weedle", sprite: require('./components/assets/pokesprites/13.png')},{number:14, name: "kakuna", sprite: require('./components/assets/pokesprites/14.png')},{number:15, name: "beedrill", sprite: require('./components/assets/pokesprites/15.png')},{number:16, name: "pidgey", sprite: require('./components/assets/pokesprites/16.png')},{number:17, name: "pidgeotto", sprite: require('./components/assets/pokesprites/17.png')},{number:18, name: "pidgeot", sprite: require('./components/assets/pokesprites/18.png')},{number:19, name: "rattata", sprite: require('./components/assets/pokesprites/19.png')},{number:20, name: "raticate", sprite: require('./components/assets/pokesprites/20.png')},{number:21, name: "spearow", sprite: require('./components/assets/pokesprites/21.png')},{number:22, name: "fearow", sprite: require('./components/assets/pokesprites/22.png')},{number:23, name: "ekans", sprite: require('./components/assets/pokesprites/23.png')},{number:24, name: "arbok", sprite: require('./components/assets/pokesprites/24.png')},{number:25, name: "pikachu", sprite: require('./components/assets/pokesprites/25.png')},{number:26, name: "raichu", sprite: require('./components/assets/pokesprites/26.png')},{number:27, name: "sandshrew", sprite: require('./components/assets/pokesprites/27.png')},{number:28, name: "sandslash", sprite: require('./components/assets/pokesprites/28.png')},{number:29, name: "nidoran", sprite: require('./components/assets/pokesprites/29.png')},{number:30, name: "nidorina", sprite: require('./components/assets/pokesprites/30.png')},{number:31, name: "nidoqueen", sprite: require('./components/assets/pokesprites/31.png')},{number:32, name: "nidoran", sprite: require('./components/assets/pokesprites/32.png')},{number:33, name: "nidorino", sprite: require('./components/assets/pokesprites/33.png')},{number:34, name: "nidoking", sprite: require('./components/assets/pokesprites/34.png')},{number:35, name: "clefairy", sprite: require('./components/assets/pokesprites/35.png')},{number:36, name: "clefable", sprite: require('./components/assets/pokesprites/36.png')},{number:37, name: "vulpix", sprite: require('./components/assets/pokesprites/37.png')},{number:38, name: "ninetales", sprite: require('./components/assets/pokesprites/38.png')},{number:39, name: "jigglypuff", sprite: require('./components/assets/pokesprites/39.png')},{number:40, name: "wigglytuff", sprite: require('./components/assets/pokesprites/40.png')},{number:41, name: "zubat", sprite: require('./components/assets/pokesprites/41.png')},{number:42, name: "golbat", sprite: require('./components/assets/pokesprites/42.png')},{number:43, name: "oddish", sprite: require('./components/assets/pokesprites/43.png')},{number:44, name: "gloom", sprite: require('./components/assets/pokesprites/44.png')},{number:45, name: "vileplume", sprite: require('./components/assets/pokesprites/45.png')},{number:46, name: "paras", sprite: require('./components/assets/pokesprites/46.png')},{number:47, name: "parasect", sprite: require('./components/assets/pokesprites/47.png')},{number:48, name: "venonat", sprite: require('./components/assets/pokesprites/48.png')},{number:49, name: "venomoth", sprite: require('./components/assets/pokesprites/49.png')},{number:50, name: "diglett", sprite: require('./components/assets/pokesprites/50.png')},{number:51, name: "dugtrio", sprite: require('./components/assets/pokesprites/51.png')},{number:52, name: "meowth", sprite: require('./components/assets/pokesprites/52.png')},{number:53, name: "persian", sprite: require('./components/assets/pokesprites/53.png')},{number:54, name: "psyduck", sprite: require('./components/assets/pokesprites/54.png')},{number:55, name: "golduck", sprite: require('./components/assets/pokesprites/55.png')},{number:56, name: "mankey", sprite: require('./components/assets/pokesprites/56.png')},{number:57, name: "primeape", sprite: require('./components/assets/pokesprites/57.png')},{number:58, name: "growlithe", sprite: require('./components/assets/pokesprites/58.png')},{number:59, name: "arcanine", sprite: require('./components/assets/pokesprites/59.png')},{number:60, name: "poliwag", sprite: require('./components/assets/pokesprites/60.png')},{number:61, name: "poliwhirl", sprite: require('./components/assets/pokesprites/61.png')},{number:62, name: "poliwrath", sprite: require('./components/assets/pokesprites/62.png')},{number:63, name: "abra", sprite: require('./components/assets/pokesprites/63.png')},{number:64, name: "kadabra", sprite: require('./components/assets/pokesprites/64.png')},{number:65, name: "alakazam", sprite: require('./components/assets/pokesprites/65.png')},{number:66, name: "machop", sprite: require('./components/assets/pokesprites/66.png')},{number:67, name: "machoke", sprite: require('./components/assets/pokesprites/67.png')},{number:68, name: "machamp", sprite: require('./components/assets/pokesprites/68.png')},{number:69, name: "bellsprout", sprite: require('./components/assets/pokesprites/69.png')},{number:70, name: "weepinbell", sprite: require('./components/assets/pokesprites/70.png')},{number:71, name: "victreebel", sprite: require('./components/assets/pokesprites/71.png')},{number:72, name: "tentcool", sprite: require('./components/assets/pokesprites/72.png')},{number:73, name: "tentacruel", sprite: require('./components/assets/pokesprites/73.png')},{number:74, name: "geodude", sprite: require('./components/assets/pokesprites/74.png')},{number:75, name: "graveler", sprite: require('./components/assets/pokesprites/75.png')},{number:76, name: "golem", sprite: require('./components/assets/pokesprites/76.png')},{number:77, name: "ponyta", sprite: require('./components/assets/pokesprites/77.png')},{number:78, name: "rapidash", sprite: require('./components/assets/pokesprites/78.png')},{number:79, name: "slowpoke", sprite: require('./components/assets/pokesprites/79.png')},{number:80, name: "slowbro", sprite: require('./components/assets/pokesprites/80.png')},{number:81, name: "magnemite", sprite: require('./components/assets/pokesprites/81.png')},{number:82, name: "magneton", sprite: require('./components/assets/pokesprites/82.png')},{number:83, name: "farfetch'd", sprite: require('./components/assets/pokesprites/83.png')},{number:84, name: "doduo", sprite: require('./components/assets/pokesprites/84.png')},{number:85, name: "dodrio", sprite: require('./components/assets/pokesprites/85.png')},{number:86, name: "seel", sprite: require('./components/assets/pokesprites/86.png')},{number:87, name: "dewgong", sprite: require('./components/assets/pokesprites/87.png')},{number:88, name: "grimer", sprite: require('./components/assets/pokesprites/88.png')},{number:89, name: "muk", sprite: require('./components/assets/pokesprites/89.png')},{number:90, name: "shellder", sprite: require('./components/assets/pokesprites/90.png')},{number:91, name: "cloyster", sprite: require('./components/assets/pokesprites/91.png')},{number:92, name: "gastley", sprite: require('./components/assets/pokesprites/92.png')},{number:93, name: "haunter", sprite: require('./components/assets/pokesprites/93.png')},{number:94, name: "gengar", sprite: require('./components/assets/pokesprites/94.png')},{number:95, name: "onix", sprite: require('./components/assets/pokesprites/95.png')},{number:96, name: "drowzee", sprite: require('./components/assets/pokesprites/96.png')},{number:97, name: "hypno", sprite: require('./components/assets/pokesprites/97.png')},{number:98, name: "krabby", sprite: require('./components/assets/pokesprites/98.png')},{number:99, name: "kingler", sprite: require('./components/assets/pokesprites/99.png')},{number:100, name: "voltorb", sprite: require('./components/assets/pokesprites/100.png')},{number:101, name: "electrode", sprite: require('./components/assets/pokesprites/101.png')},{number:102, name: "exeggcute", sprite: require('./components/assets/pokesprites/102.png')},{number:103, name: "exeggutor", sprite: require('./components/assets/pokesprites/103.png')},{number:104, name: "cubone", sprite: require('./components/assets/pokesprites/104.png')},{number:105, name: "marowak", sprite: require('./components/assets/pokesprites/105.png')},{number:106, name: "hitmonlee", sprite: require('./components/assets/pokesprites/106.png')},{number:107, name: "hitmonchan", sprite: require('./components/assets/pokesprites/107.png')},{number:108, name: "lickitung", sprite: require('./components/assets/pokesprites/108.png')},{number:109, name: "koffing", sprite: require('./components/assets/pokesprites/109.png')},{number:110, name: "weezing", sprite: require('./components/assets/pokesprites/110.png')},{number:111, name: "rhyhorn", sprite: require('./components/assets/pokesprites/111.png')},{number:112, name: "rhydon", sprite: require('./components/assets/pokesprites/112.png')},{number:113, name: "chansey", sprite: require('./components/assets/pokesprites/113.png')},{number:114, name: "tangela", sprite: require('./components/assets/pokesprites/114.png')},{number:115, name: "kangaskhan", sprite: require('./components/assets/pokesprites/115.png')},{number:116, name: "horsea", sprite: require('./components/assets/pokesprites/116.png')},{number:117, name: "seadra", sprite: require('./components/assets/pokesprites/117.png')},{number:118, name: "goldeen", sprite: require('./components/assets/pokesprites/118.png')},{number:119, name: "seaking", sprite: require('./components/assets/pokesprites/119.png')},{number:120, name: "staryu", sprite: require('./components/assets/pokesprites/120.png')},{number:121, name: "starmie", sprite: require('./components/assets/pokesprites/121.png')},{number:122, name: "mr. mime", sprite: require('./components/assets/pokesprites/122.png')},{number:123, name: "scyther", sprite: require('./components/assets/pokesprites/123.png')},{number:124, name: "jynx", sprite: require('./components/assets/pokesprites/124.png')},{number:125, name: "electabuzz", sprite: require('./components/assets/pokesprites/125.png')},{number:126, name: "magmar", sprite: require('./components/assets/pokesprites/126.png')},{number:127, name: "pinsir", sprite: require('./components/assets/pokesprites/127.png')},{number:128, name: "tauros", sprite: require('./components/assets/pokesprites/128.png')},{number:129, name: "magikarp", sprite: require('./components/assets/pokesprites/129.png')},{number:130, name: "gyrados", sprite: require('./components/assets/pokesprites/130.png')},{number:131, name: "lapras", sprite: require('./components/assets/pokesprites/131.png')},{number:132, name: "ditto", sprite: require('./components/assets/pokesprites/132.png')},{number:133, name: "eevee", sprite: require('./components/assets/pokesprites/133.png')},{number:134, name: "vaporeon", sprite: require('./components/assets/pokesprites/134.png')},{number:135, name: "jolteon", sprite: require('./components/assets/pokesprites/135.png')},{number:136, name: "flareon", sprite: require('./components/assets/pokesprites/136.png')},{number:137, name: "porygon", sprite: require('./components/assets/pokesprites/137.png')},{number:138, name: "omonyte", sprite: require('./components/assets/pokesprites/138.png')},{number:139, name: "omastar", sprite: require('./components/assets/pokesprites/139.png')},{number:140, name: "kabuto", sprite: require('./components/assets/pokesprites/140.png')},{number:141, name: "kabutops", sprite: require('./components/assets/pokesprites/141.png')},{number:142, name: "aerodactyl", sprite: require('./components/assets/pokesprites/142.png')},{number:143, name: "snorlax", sprite: require('./components/assets/pokesprites/143.png')},{number:144, name: "articuno", sprite: require('./components/assets/pokesprites/144.png')},{number:145, name: "zapdos", sprite: require('./components/assets/pokesprites/145.png')},{number:146, name: "moltres", sprite: require('./components/assets/pokesprites/146.png')},{number:147, name: "dratini", sprite: require('./components/assets/pokesprites/147.png')},{number:148, name: "dragonair", sprite: require('./components/assets/pokesprites/148.png')},{number:149, name: "dragonite", sprite: require('./components/assets/pokesprites/149.png')},{number:150, name: "mewtwo", sprite: require('./components/assets/pokesprites/150.png')},{number:151, name: "mew", sprite: require('./components/assets/pokesprites/151.png')}],

    }
  }
  render() {
    var buttons = this.state.pokemon.map((poke, i) => {
      return <Pokebutton key={i}
              name={poke.name} 
              sprite={poke.sprite}
              number={poke.number}/>
    })
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {/* <BackgroundImage /> */}
        {buttons}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    marginTop: 40,
    overflow: 'scroll',
    display: "flex",
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
