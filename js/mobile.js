document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("click", function () {
        window.location.href = "/profile/";
    });
    // fetch("http://212.112.103.137:6457/api/limits/", {
    fetch("https://api.dms.insurance.kg:6458/api/limits/", {
        method: 'GET',
        headers: {
            'Authorization': "Bearer " + localStorage.getItem("accessToken")
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // localStorage.setItem("limits", JSON.stringify(data));
            data.limits.forEach(function (limit) {
                var block_wrappers = document.querySelectorAll(".block_wrapper");

                block_wrappers.forEach(function (block_wrapper) {
                    var bold = block_wrapper.querySelector("#bold");


                    if (bold) {
                        if (bold.innerHTML === limit.limitNameCRM) {
                            var summ = block_wrapper.querySelector(".number");
                            var summ_span = summ.querySelector("span");
                            summ_span.textContent = limit.limitSummCRM;
                        }
                    } else {
                    }

                })
            });
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
    // fetch("http://212.112.103.137:6457/api/sublimits/", {
    fetch("https://api.dms.insurance.kg:6458/api/sublimits/", {
        method: 'GET',
        headers: {
            'Authorization': "Bearer " + localStorage.getItem("accessToken")
        }
    })
        .then(response => {
            if (!response.ok) {
                dropdownContent.style.display = "none";
                buttonDropdownOpenLink.style.display = "block";
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // localStorage.setItem("sublimits", JSON.stringify(data));
            data.sublimits.forEach(function (sublimit) {
                var block_wrappers = document.querySelectorAll(".block_wrapper");

                block_wrappers.forEach(function (block_wrapper) {
                    var limit_content = block_wrapper.querySelector(".limit_content");

                    if (limit_content) {
                        var spans = limit_content.querySelectorAll("span");
                        spans.forEach(function (span) {
                            if (span.innerHTML === sublimit.sublimitName) {
                                var num = block_wrapper.querySelector(".number");
                                var numSpan = num.querySelector("span");
                                numSpan.textContent = sublimit.sublimitSumm;
                            }
                        });
                    }
                });
            });
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });


    var container_limits = document.querySelector(".container_limits");
    if (window.innerWidth <= 800) {
        var container = document.querySelector(".container");
        container_limits.style.display = "flex";
        // container_limits.style.position = "relative";
    } else {
        container_limits.style.display = "flex";
        container_limits.style.position = "fixed";
    }
    pop_up = true;

    var limits = JSON.parse(localStorage.getItem("limits"));
    var sublimits = JSON.parse(localStorage.getItem("sublimits"));
})
;