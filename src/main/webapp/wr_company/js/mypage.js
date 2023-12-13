<<<<<<< HEAD

 $(document).ready(function() {
  // 버튼 클릭 이벤트
  $("#kanri").on("click", function() {
    // AJAX를 이용해 별도의 JSP 파일 로드
    $.ajax({
      url: "kanri.jsp", // 로드할 다른 JSP 파일 경로
      method: "GET",
      success: function(data) {
        // 로드 성공 시, 결과를 #loadedContent에 삽입
        $("#mypage_centents3_box").html(data);
      },
      error: function() {
        // 로드 실패 시 처리
        alert("데이터를 불러오는 데 실패했습니다.");
      }
    });
  });
  $("#order").on("click", function() {
    // AJAX를 이용해 별도의 JSP 파일 로드
    $.ajax({
      url: "order.jsp", // 로드할 다른 JSP 파일 경로
      method: "GET",
      success: function(data) {
        // 로드 성공 시, 결과를 #loadedContent에 삽입
        $("#mypage_centents3_box").html(data);
      },
      error: function() {
        // 로드 실패 시 처리
        alert("데이터를 불러오는 데 실패했습니다.");
      }
    });
  });
  $("#cart").on("click", function() {
    // AJAX를 이용해 별도의 JSP 파일 로드
    $.ajax({
      url: "../wj/cart.jsp", // 로드할 다른 JSP 파일 경로
      method: "GET",
      success: function(data) {
        // 로드 성공 시, 결과를 #loadedContent에 삽입
        $("#mypage_centents3_box").html(data);
      },
      error: function() {
        // 로드 실패 시 처리
        alert("데이터를 불러오는 데 실패했습니다.");
      }
    });
  });
  $("#review").on("click", function() {
    // AJAX를 이용해 별도의 JSP 파일 로드
    $.ajax({
      url: "review.jsp", // 로드할 다른 JSP 파일 경로
      method: "GET",
      success: function(data) {
        // 로드 성공 시, 결과를 #loadedContent에 삽입
        $("#mypage_centents3_box").html(data);
      },
      error: function() {
        // 로드 실패 시 처리
        alert("데이터를 불러오는 데 실패했습니다.");
      }
    });
  });
 $("#seller-register").on("click", function() {
    // AJAX를 이용해 별도의 JSP 파일 로드
    $.ajax({
      url: "seller_register3.jsp", // 로드할 다른 JSP 파일 경로
      method: "GET",
      success: function(data) {
        // 로드 성공 시, 결과를 #loadedContent에 삽입
        $("#mypage_centents3_box").html(data);
      },
      error: function() {
        // 로드 실패 시 처리
        alert("데이터를 불러오는 데 실패했습니다.");
      }
    });
  });
=======
$(document).ready(function() {
	// 버튼 클릭 이벤트
	$("#kanri").on("click", function() {
		// AJAX를 이용해 별도의 JSP 파일 로드
		$.ajax({
			url: "wr_company/kanri.jsp", // 로드할 다른 JSP 파일 경로
			method: "GET",
			success: function(data) {
				// 로드 성공 시, 결과를 #loadedContent에 삽입
				$("#mypage_centents3_box").html(data);
			},
			error: function() {
				// 로드 실패 시 처리
				alert("데이터를 불러오는 데 실패했습니다.");
			}
		});
	});
	$("#order").on("click", function() {
		// AJAX를 이용해 별도의 JSP 파일 로드
		$.ajax({
			url: "wr_company/order.jsp", // 로드할 다른 JSP 파일 경로
			success: function(data) {
				// 로드 성공 시, 결과를 #loadedContent에 삽입
				$("#mypage_centents3_box").html(data);
			},
			error: function() {
				// 로드 실패 시 처리
				alert("데이터를 불러오는 데 실패했습니다.");
			}
		});
	});
	$("#cart").on("click", function() {
		// AJAX를 이용해 별도의 JSP 파일 로드
		$.ajax({
			url: "wr_company/cart.jsp", // 로드할 다른 JSP 파일 경로
			success: function(data) {
				// 로드 성공 시, 결과를 #loadedContent에 삽입
				$("#mypage_centents3_box").html(data);
			},
			error: function() {
				// 로드 실패 시 처리
				alert("데이터를 불러오는 데 실패했습니다.");
			}
		});
	});
	$("#review").on("click", function() {
		// AJAX를 이용해 별도의 JSP 파일 로드
		$.ajax({
			url: "wr_company/review.jsp", // 로드할 다른 JSP 파일 경로
			success: function(data) {
				// 로드 성공 시, 결과를 #loadedContent에 삽입
				$("#mypage_centents3_box").html(data);
			},
			error: function() {
				// 로드 실패 시 처리
				alert("데이터를 불러오는 데 실패했습니다.");
			}
		});
	});
	$("#seller-register").on("click", function() {
		// AJAX를 이용해 별도의 JSP 파일 로드
		$.ajax({
			url: "wr_company/seller_register3.jsp",
			success: function(data) {
				// 로드 성공 시, 결과를 #loadedContent에 삽입
				$("#mypage_centents3_box").html(data);
			},
			error: function() {
				// 로드 실패 시 처리
				alert("데이터를 불러오는 데 실패했습니다.");
			}
		});
	});
>>>>>>> 42baf22a77178dd938ed6fc833c4190460637b6e

});

 /*function showJSP(jspId) {
            // 모든 JSP 컨테이너를 숨김
            document.querySelectorAll('.jsp-container').forEach(function(container) {
                container.style.display = 'none';
            });

            // 클릭한 A 태그에 해당하는 JSP 컨테이너를 표시
            document.getElementById(jspId).style.display = 'block';
        }*/

