function handleDragStart(e) {
            var cols = document.querySelectorAll('.smilie');
            [].forEach.call(cols, function(col) {
                col.addEventListener('dragstart', handleDragStart, false);
                col.addEventListener('dragenter', handleDragEnter, false)
                col.addEventListener('dragover', handleDragOver, false);
                col.addEventListener('dragleave', handleDragLeave, false);
                col.addEventListener('drop', handleDrop, false);
                col.addEventListener('dragend', handleDragEnd, false);
                col.classList.remove('over');
            });
            dragSrcEl = this;
            source = this.getAttribute("id");
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', this.innerHTML);
        };

        function handleDragOver(e) {
            if (e.preventDefault) {
                e.preventDefault(); // Necessary. Allows us to drop.
            }
            e.dataTransfer.dropEffect = 'move'; // See the section on the DataTransfer object.
            return false;
        }

        function handleDragEnter(e) {}

        function handleDragLeave(e) {
            this.classList.remove('over'); // this / e.target is previous target element.
        }

        function handleDrop(e) {
            // this/e.target is current target element.
            if (e.stopPropagation) {
                e.stopPropagation(); // Stops some browsers from redirecting.
            }

            if (dragSrcEl != this) {

                var att1 = document.createAttribute("id");
                if (dragSrcEl.getAttribute("id") == "basic") {
                    att1.value = "favourite";
                    dragSrcEl.setAttributeNode(att1);;
                    $('.standard').find('.smilie_group').append(dragSrcEl);
                    localStorage.favourite = $('.standard').find('.smilie_group')[0].innerHTML;
                } else {
                    var title = dragSrcEl.innerText;
                    $('.standard').find('.smilie_group').remove(dragSrcEl);
                    $(".smilie").each(function(index, image) {
                        $this = $(image);
                        if (title == image.innerText && this.getAttribute("id") == "favourite") {
                            this.remove();
                            localStorage.favourite = $('.standard').find('.smilie_group')[0].innerHTML;
                        }
                    });
                }
            }
            return false;
        }

        function handleDragEnd(e) {
            // this/e.target is the source node.
            [].forEach.call(cols, function(col) {
                col.classList.remove('over');
            });
        }

        $(".smilie_list").each(function(index, image) {
            $this = $(image);

            var group = '<br><br><h3>Favourite Smilies</h3> <ul class="smilie_group">';
            var groupEnd = '</ul><br><br><br><br><br><br>'
            var ht = '<h3>Basic Smilies</h3> <ul class="smilie_group"> <li class="smilie"> <div class="text">:(</div> <img alt="" src="http://fi.somethingawful.com/images/smilies/frown.gif" title="frown"> <li class="smilie"> <div class="text">:)</div> <img alt="" src="http://fi.somethingawful.com/images/smilies/smile.gif" title="smile"> </ul>';
            $(this).find(".inner").prepend(group + localStorage.favourite + groupEnd)
            var cols = document.querySelectorAll('.smilie');
            [].forEach.call(cols, function(col) {
                col.addEventListener('dragstart', handleDragStart, false);
                col.addEventListener('dragenter', handleDragEnter, false)
                col.addEventListener('dragover', handleDragOver, false);
                col.addEventListener('dragleave', handleDragLeave, false);
                col.addEventListener('drop', handleDrop, false);
                col.addEventListener('dragend', handleDragEnd, false);
            });
        });

        $(".smilie").each(function(index, image) {
            $this = $(image);

            var att = document.createAttribute("draggable");
            att.value = "true";
            this.setAttributeNode(att);;

            var att1 = document.createAttribute("id");

            if (this.getAttribute("id") != "favourite") {
                att1.value = "basic";
                this.setAttributeNode(att1);;
            }
        });