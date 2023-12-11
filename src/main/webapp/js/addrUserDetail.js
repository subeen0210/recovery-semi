/**
 * 
 */
window.addEventListener("load",()=>{
const userURL = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=";
	//검색 버튼이벤트 설정
	const user_btnSearch = document.getElementById("userAddr-btnSearch");

	user_btnSearch.addEventListener("click",()=>{
		let user_zipcode = document.querySelector("#userAddr-Zipcode").value;	
		// 입력 한 우편번호
		let url = userURL + user_zipcode + "&limit=100";
		// url들 연결

		fetch(url)
			.then( response => response.json())
			.then( data => formatJSON(data));
		});
});
function formatJSON(json){
	let i;
	if(json.message !== null){
		alert(json.message);
	} else if (json.results === null) {
		alert("郵便番号が存在しません");
	}
	else{
		let addrDetail = "";
		for (i = 0; i < json.results.length; i++) {			
			addrDetail += "<div>";
			addrDetail += "<div>"+(i+1).toString() + "</div>";			
			addrDetail += "<div>"+json.results[i].address1 + "</div>";			
			addrDetail += "<div>"+json.results[i].address2 + "</div>";			
			addrDetail += "<div><button class='addrBtn' data-index='" + i + "'>選択</button></div>";			
			addrDetail += "</div>"
			addrDetail += "<hr>"
		}
		document.querySelector("#items").innerHTML = addrDetail;
	}
	
	
	///////////////////////////////////////////////////////
	const buttons = document.querySelectorAll(".addrBtn");
        buttons.forEach(function(button) {
            button.addEventListener("click", function(event) {
                const clickedIndex = event.target.dataset.index;
                console.log("클릭된 버튼의 인덱스: " + clickedIndex);
                document.getElementById("address1").value = json.results[clickedIndex].address1;
                document.getElementById("address2").value = json.results[clickedIndex].address2;
                sendDataToParent();            
            });
        });
	
}	
function sendDataToParent() {
    // 입력된 데이터 가져오기
    const inputNum = document.getElementById("userAddr-Zipcode").value;
    const inputData1 = document.getElementById("address1").value;
    const inputData2 = document.getElementById("address2").value;
	console.log(inputNum);
	console.log(inputData1);
	console.log(inputData2);
    // 부모 창으로 데이터 전달
    window.opener.receiveDataFromPopup(inputNum+"!"+inputData1+"!"+inputData2);

    // 팝업 창 닫기
  	window.close();
	
	
	
	
}


	
