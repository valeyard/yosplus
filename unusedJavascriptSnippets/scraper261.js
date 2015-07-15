                var probReg = new RegExp("(.*)\. \s*User loses posting privileges for ([0-9]+|100,000) (hours|day|days|week|month).")

        var dateReg = new RegExp("([0-9]+\/[0-9]+\/[0-9]+)");
        var timeReg = new RegExp("(([0-9]+:[0-9]+)(am|pm))");

        var modnames = {};
        //var htr = 'http://forums.somethingawful.com/banlist.php?&sort=&asc=0&adminid=&ban_month=0&ban_year=0&actfilt=-1&pagenumber='
        var i = 1;

        if (thisForum == 261) {
            $postS.each(function(index, image) {
                $this = $(image);

                var collec = {}

                //stealing postlink from post
                var one = $this.find("ul.profilelinks").find("li").find("a")[0]
                if (one != undefined) {
                    one = one.innerText;
                    collec[one] = $this.find("ul.profilelinks").find("li").find("a")[0].href;
                } else {
                    one = "Profile"
                    collec[one] = undefined;
                }


                one = $this.find("ul.profilelinks").find("li").find("a")[1];
                if (one != undefined) {
                    one = one.innerText;
                    collec[one] = $this.find("ul.profilelinks").find("li").find("a")[1].href
                } else {
                    one = "Message"
                    collec[one] = undefined;
                }


                one = $this.find("ul.profilelinks").find("li").find("a")[2]
                if (one != undefined) {
                    one = one.innerText;
                    collec[one] = $this.find("ul.profilelinks").find("li").find("a")[2].href
                } else {
                    one = "Post History";
                    collec[one] = undefined;
                }


                one = $this.find("ul.postbuttons").find("li").find('img[alt="Quote"]').parent()[0].href
                    //if (one != undefined) one = one.innerText;
                    //console.log(one)
                collec["quote"] = one;

                // one = $this.find("ul.postbuttons").find("li").find("a")[1]
                // if (one != undefined) one = one.innerText;
                // collec[one] = $this.find("ul.postbuttons").find("li").find("a")[1]


                one = $this.find("dd.title").find("img")[0]
                if (one != undefined) one = one.src
                else one = "";
                collec["av"] = one


                var avtext = $this.find("dd.title")[0].innerText
                collec["title"] = avtext

                var postdate = $(image).find("td.postdate")[0].innerText.substring(4);
                collec["Date"] = postdate;

                // console.log(profile.href)
                // console.log(message)
                // console.log(posthistory)
                // console.log(report)
                // console.log(quote.href)
                // console.log(av.href)
                // console.log(avtext)
                message = "test"
                var posthtml = '<div class="jumbotron"><div class="root standalone-tweet ltr twitter-tweet not-touch" dir="ltr" data-dt-months="Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec" data-dt-full="%{hours12}:%{minutes}%{amPm}- %{day}%{month}%{year}" data-dt-am="AM" data-dt-pm="PM" data-iframe-title="Embedded Tweet" data-scribe="page:tweet" id="twitter-widget-0" lang="en" data-twitter-event-id="0"><blockquote class="tweet subject expanded h-entry" data-tweet-id="275673554408837120" cite="https://twitter.com/gabromanato/status/275673554408837120" data-scribe="section:subject"><div class="header"><div class="h-card p-author" data-scribe="component:author"><a class="u-url profile" href="' + collec["Profile"] + '" data-scribe="element:user_link"><img class="u-photo avatar" alt="" src="' + collec["av"] + '" data-src-2x="https://pbs.twimg.com/profile_images/2640251839/828ff5f972f2b5da73d98a1653727b78_bigger.png" data-scribe="element:avatar"><span class="full-name"><span class="p-name customisable-highlight" data-scribe="">USERNAME</span></span><span class="p-nickname" dir="ltr" data-scribe="element:screen_name"><b>' + collec["title"] + '</b></span></a></div><a class="follow-button profile" href="' + collec["Post History"] + '" role="button" title="Follow Gabriele Romanato on Twitter"><i class="ic-button-bird"></i>Follow</a></div><div class="content e-entry-content" data-scribe="component:tweet"><p class="e-entry-title">POST</p><div class="dateline collapsible-container"><a class="u-url customisable-highlight long-permalink" href="#post432136516" data-datetime="2012-12-03T18:51:11+0000" data-scribe="element:full_timestamp"><time pubdate="" class="dt-updated" datetime="2012-12-03T18:51:11+0000" title="Time posted: 03 Dec 2012, 18:51:11 (UTC)">' + collec["Date"] + '</time></a></div></div><div class="footer customisable-border" data-scribe="component:footer"><span class="stats-narrow customisable-border"><span class="stats" data-scribe="component:stats"><a href="https://twitter.com/gabromanato/statuses/275673554408837120" title="View Tweet on Twitter" data-scribe="element:retweet_count"><span class="stats-retweets"><strong>1</strong>' + collec["quote"] + '</span></a><a href="https://twitter.com/gabromanato/statuses/275673554408837120" title="View Tweet on Twitter" data-scribe="element:favorite_count"><span class="stats-favorites"><strong>1</strong> ' + message + ' </span></a></span></span><ul class="profilelinks"><li><a href="member.php?action=getinfo&amp;userid=94730">Profile</a></li><li><a href="private.php?action=newmessage&amp;userid=94730">Message</a></li><li><a href="search.php?action=do_search_posthistory&amp;userid=94730">Post History</a></li></ul><ul class="postbuttons"><input type="button" class="empty meMain" value="Emptyquote!"><li class="alertbutton"><a href="modalert.php?postid=432136516&amp;username=Swimp"><img src="http://forumimages.somethingawful.com/images/button-report.gif" border="0" alt="Alert Moderators"></a>&nbsp;&nbsp;</li><li><a href="newreply.php?action=newreply&amp;postid=432136516"><img src="http://fi.somethingawful.com/images/sa-quote.gif" alt="Quote" title=""></a></li></ul></div></blockquote></div></div>';


                $this.html(posthtml);
            });
        }