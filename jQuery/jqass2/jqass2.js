   $(document).ready(function() {
            $("img").click(function() {
                var currentSrc = $(this).attr("src");
                var altSrc = $(this).attr("alt");
                $(this).attr("src", altSrc);
                $(this).attr("alt", currentSrc);
            });
        });
