
const Main = () => {

    return(
    <section className = "section">
        <article class="message is-success">
            <div class="message-header">
                <p>おうち時間で簡単知育ゲーム </p>
            </div>

            <div class="message-body">
               対象ユーザーは小さなお子様や高齢者。 <br/>
               ゲーム感覚で野菜を学習できる。<br/>
               成果が分かりやすいので続けられる。<br/>

               <br/>
            

               また、高齢者に対しては操作が簡単だから、ゲームを楽しめることができる。<br/>
               脳トレで認知症予防ができる。
            </div>
        </article>
        
        <article class="message is-success">
            <div class="message-header">
                <p>ゲーム説明</p>
            </div>

            <div class="message-body">
                ベジカルにはカルタのモードとかさねえのモードという二つのモードがあります。
                さらに、カルタのモードでは野菜の名前モードと野菜の説明モードがあります。

                <br/>
                <br/>

                まず、カルタのモードでは画面上に野菜の名前や説明が表示されます。そして、その表示に合う野菜のカルタを
                クリックすることでカルタが消えていき、カルタが全てなくなると終了となります。
                また、ゲームが終了するとスコア表示され、さらに上位5つのスコアが表示されます。

                <br/>
                <br/>

                次に、かさねえモードでは4つの野菜が半透明となって重なった状態で表示されます。
                ゲームをプレイしているユーザーがその重なっている野菜を当てていきます。
                そして、数秒後には答えの野菜が表示されます。
                ゲームの難易度はやさしいとむずかしいがあり、それぞれ野菜が表示される時間が異なります。
            </div>
        </article>
        
       

        <p className = "title  is-italic  is-family-primary">LINKS</p>
        <div className = "container">
            <div className="columns is-vcentered">


                <div className="column">
                    <a href="https://github.com/kumastry/vegekaru" target="_blank">
                        <div className = "button is-large hero is-success">
                            <p className="title is-white">Github</p>
                        </div>    
                    </a>
                </div>   

          

        
         
                <div className="column">
                    <a href="https://docs.google.com/presentation/d/e/2PACX-1vT7MIN7xf8zNN-tX6p_R7B5PagvXpHN2noPe89hqEuZJvJMpd714--D_v7QlYkLpZr78GKfFKsgxulz/pub?start=false&loop=false&delayms=3000&slide=id.p" target="_blank">
                        <div className = "button is-large hero is-success">
                            <p className="title is-white">スライド</p>
                        </div>    
                    </a>
                </div>  

            </div>
        </div> 
     </section>
    );
}

export default Main;