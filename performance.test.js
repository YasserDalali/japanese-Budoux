
// Sample Japanese texts of different lengths
const japaneseTexts = [
    { text: "こんにちは", length: 5 },
    { text: "今日は良い天気ですね", length: 10 },
    { text: "日本語のテストを実行しています。", length: 16 },
    { text: "この文は性能テストのために用意された日本語のテキストです。", length: 29 },
    { text: "明日は晴れるといいですね。私たちは公園に行きます。とても楽しみです。", length: 34 },
    { text: "日本の文化や歴史について学ぶことは非常に面白いです。私は特に江戸時代のことが好きです。", length: 43 },
    { text: "長い文章の例として、これは日本の食文化についての詳細な説明です。和食はとても健康的で、美味しいです。", length: 50 },
    { text: "私たちは日本の四季を感じることができる素晴らしい場所に住んでいます。桜、紅葉、雪、そして夏の花火が特に楽しみです。", length: 57 },
    { text: "日本には多様な地形があり、山、川、湖、海などがあります。自然の美しさは人々に感動を与え、訪れる価値があります。", length: 76 },
    { text: "私の夢は世界中を旅行することです。特に、歴史的な場所や文化的な名所を訪れることに興味があります。", length: 100 }
];

// Function to measure performance
const measurePerformance = (parser, text) => {
    const ele = document.createElement('div');
    ele.textContent = text;
    document.body.appendChild(ele);

    const startTime = performance.now();
    parser.applyToElement(ele);
    const endTime = performance.now();

    document.body.removeChild(ele);
    return endTime - startTime;
};

describe('BudouX Parser Performance Tests', () => {
    const parser = loadDefaultJapaneseParser();

    japaneseTexts.forEach(({ text, length }) => {
        test(`should parse ${length} character text efficiently`, () => {
            const executionTime = measurePerformance(parser, text);
            console.log(`Execution time for ${length} characters: ${executionTime} ms`);

            // Set an upper limit for acceptable performance in milliseconds
            expect(executionTime).toBeLessThan(500); // Adjust based on acceptable limits
        });
    });
});
