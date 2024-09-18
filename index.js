const quotes = [
    "Be yourself; everyone else is already taken.",
    "A room without books is like a body without a soul.",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    "Be the change that you wish to see in the world.",
    "Always forgive your enemies; nothing annoys them so much.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "We accept the love we think we deserve.",
    "It is better to be hated for what you are than to be loved for what you are not.",
    "The man who does not read has no advantage over the man who cannot read.",
    "If you spend too much time thinking about a thing, you'll never get it done.",
    "Everything has beauty, but not everyone sees it.",
    "Well done is better than well said.",
    "In three words, I can sum up everything I've learned about life: it goes on.",
    "Life is trying things to see if they work.",
    "I find that the harder I work, the more luck I seem to have.",
    "If you want to make your dreams come true, the first thing you have to do is wake up.",
    "It is better to fail in originality than to succeed in imitation.",
    "You miss 100% of the shots you don't take.",
    "Winning isn't everything, but wanting to win is.",
    "It does not matter how slowly you go as long as you do not stop.",
    "There is never enough time to do everything, but there is always enough time to do the most important thing.",
    "All great achievements require time.",
    "The trouble is, you think you have time.",
    "Never leave till tomorrow that which you can do today.",
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")
function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}