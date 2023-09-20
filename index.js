const quote=document.querySelector('.btn')
    const api_url='https://api.quotable.io/random'
    const quoteOfTheDayIs=document.querySelector('.quoteOfTheDayIs')
    const author=document.querySelector('.author')
    const tweet=document.querySelector('.tweet')
    let data={}
    let postQuote=''
    
    // getQuotes(api_url)

    quote.addEventListener('click',generateQuote)

    function generateQuote(e){
       getQuotes(api_url)
        
        
    }
    async function getQuotes(url){
        try{
            const response=await fetch(url)
         data=await response.json();
         document.querySelector('.show').style.display='block'
        quoteOfTheDayIs.innerHTML=data.content
        author.innerHTML=data.author
        postQuote=data.content
        }catch(error){
            alert(error)
        } 

    }

    tweet.addEventListener('click',shareTweet)

    function shareTweet(e){
       if(postQuote!==''){
      
           window.open(` https://twitter.com/intent/tweet?text=${quoteOfTheDayIs.innerHTML} \n by---- ${ author.innerHTML} `,'Tweet window'," width=600px,height=300px")
           getQuotes(api_url)
       }
    }