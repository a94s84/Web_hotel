$(document).ready(function(){
    $("#h_location").click(function(){
        $("#h_detail").html(
            `<h6>自行開車</h6>
            <p>以Google 導航定位旅宿地址易有誤，請循台2線淡水往三芝、萬里方向前進，請於「淡金公路20公里處」於旅宿聯繫</p>
            <h6>大眾運輸</h6>
            <p>旅宿與鄰近交通點距離：</p>
            <ul>
                <li>松山機場，距離 36 公里；詳細時刻表與票價請至台北松山機場查詢</li>
                <li>台北火車站，距離 35 公里；詳細時刻表與票價請至台灣鐵路管理局查詢</li>
                <li>台北轉運站，距離 35 公里；詳細時刻表與票價請至台北轉運站查詢</li>
                <li>三芝站公車站，距離 2 公里；詳細時刻表與票價請至中興巴士查詢</li>
                <li>R28 淡水捷運站，距離 16 公里；詳細時刻表與票價請至台北捷運查詢</li>
                <li>建議從三芝站公車站轉乘計程車，約 5 分鐘，約 90 元（時間與價格僅供參考）</li>
            </ul>`
        );
    });

    $("#h_notice").click(function(){
        $("#h_detail").html(
            `<h6>入住須知</h6>
            
            <ul>
                <li>入住時間：15:00 ~ 18:00；須事先與旅宿預約入住時間，請於入住 1 日前預約．若需延後入住，請於入住當日 15:00 前告知</li>
                <li>退房時間：11:00 前；請遵守旅宿規定之退房時間</li>
                <li>附設咖啡廳；公休日：不定時公休</li>
                <li>環境自然樸質，難免有小昆蟲作伴</li>
                <li>提供可開伙廚房供使用，請避免產生油煙之料理方式</li>
                <li>入住時請攜帶身分證或護照等證件以供登記住宿使用</li>
                <li>現場不提供刷卡服務、國民旅遊卡</li>
                <li>貴重物品請自行保管，旅宿無法負保管責任</li>
                <li>請隨手關閉燈具和電器用品</li>
                <li>鑰匙若有遺失或損壞等情形，將酌收工本費 200 元</li>
            </ul>`
        );
    });

    $("#h_facility").click(function(){
        $("#h_detail").html(
            `<h6>設備服務</h6>
            <p>共享設備</p>
            <ul>
            <li>沐浴用品：洗髮乳、沐浴乳、洗手乳</li>
            <li>家電用品：液晶電視、小冰箱</li>
            <li>其他：書籍、雜誌、無線網路</li>
            <li>室內空間：客廳</li>
            </ul>

            <p>服務內容</p>
            <ul>
                <li>代叫計程車</li>
                <li>旅遊諮詢服務</li>
                <li>外語接待服務： 英語</li>
                <li>代寄明信片</li>
            </ul>`
        );
    });

    $("#h_contact").click(function(){
        $("#h_detail").html(
            `<h6>聯絡資訊</h6>
            <p>官網</p>
            <a href="http://www.theadagio.com.tw/zh-tw/space/more?sid=1/">http://www.theadagio.com.tw/zh-tw/space/more?sid=1/</a>
            <p>Facebook</p>
            <a href="https://www.facebook.com/adagio.travel/">https://www.facebook.com/adagio.travel/</a>
            <p>信箱</p><a href="service1@theadagio.com.tw">service1@theadagio.com.tw</a>`
        );
    });

 
})

