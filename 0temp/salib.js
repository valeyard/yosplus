
;(function(top) {
	var SACore = function() {
		this.isUndefined = function(x) {
			var u;
			return (x === u);
		}
	};

	// stick one of these into parent
	top.$SA = new SACore();

	// got firebug?
	if(!top.console) {
		top.console = (function() {
			var dummy = function(n) {};
			return { debug: dummy, dir: dummy };
		})();
	}
})(window);


// {{{ $SA.buttonPanel(options)
/*
* Creates a button that triggers a content panel.
*
* Options:
*	btnHtml:	html string to set as button content
*	panelHtml:	html string to set as panel content
*	panelLeft: 
*	panelTop:	left and top positions for the panel div; by default the panel is
*				positioned relative to its button position
*
*/
$SA.buttonPanel = function(userOptions) {
	var $self = this;

	var options = {
		panelAttachTo: null,
		btnId: null,
		btnHtml: '',
		panelId: '',
		panelHtml: '',
		panelLeft: null,
		panelTop: null
	};
	$.extend(options, userOptions);

	function openPanel() {
		this.opened = true;
		this.buttonActive();
		this.alignPanel();
		this.$domPanel.removeClass("inactive").addClass("active").show();
	}

	function closePanel() {
		this.opened = false;
		this.$domPanel.removeClass("active").hide();
		this.buttonIdle();
		$($self).trigger('panelClosed');
	}

	function setContent(domc) {
		this.$domPanel.empty().append(domc);
	}

	function alignPanel() {
		var p = this.buttonPos();
		var np = { top:this.panelTop, left:this.panelLeft };
		if(!(np.top > 0)) {
			np.top = p.top - this.$domPanel.outerHeight() + 1;
		}
		if(!(np.left > 0)) {
			np.left = p.left - 30;
		}
		this.$domPanel.css(np);
	}

	this.buttonActive = function() { this.$domButton.addClass("active").removeClass("inactive") };
	this.buttonBlur = function() { this.$domButton.removeClass("active").addClass("inactive") };
	this.buttonIdle = function() { this.$domButton.removeClass("active").removeClass("inactive") };

	// methods
	this.panelAP = $( options.panelAttachTo ? options.panelAttachTo : document.body );
	this.panelTop = options.panelTop;
	this.panelLeft = options.panelLeft;
	this.openPanel = openPanel;
	this.closePanel = closePanel;
	this.setContent = setContent;
	this.buttonPos = function() { return this.$domButton.position() }
	this.alignPanel = alignPanel;

	// props
	this.posLeft = 20;
	this.opened = false;
	this.$domButton = $('<div class="buttonPanel_button">' + options.btnHtml + '</div>');
	if(options.btnId) this.$domButton.attr('id', options.btnId);

	this.$domPanel = $('<div class="buttonPanel_panel" />')
		.hide()
		.appendTo(this.panelAP)
		.css('position', 'absolute');

	// init
	this.setContent(options.panelHtml);
	if(options.panelId) this.$domPanel.attr('id', options.panelId);
	this.$domButton.click(function(e) {
		if($self.opened) {
			$self.closePanel();
			$($self).trigger('afterClose');
		} else {
			$($self).trigger('beforeOpen');
			$self.openPanel();
			e.preventDefault();
			return false;
		}
	});
};

// }}}
// {{{ $SA.buttonPanelGroup()
$SA.buttonPanelGroup = function(userOptions) {
	var $self = this;
	var bps = {};

	var options = {
		attachTo: null
	};
	if(arguments) $.extend(options, userOptions);

	var $ap = $(options.attachTo);
	if(!$ap.length) {
		console.debug('error: cannot find attach point for panel');
		return;
	}
	$ap.addClass('buttonPanelGroup');
	this.$domContainer = $ap;

	function addBtnPanel(name, bp) {
		this.bps[name] = bp;
		this.$domContainer.append(bp.$domButton);

		bp.panelLeft = this.$domContainer.position().left - 20;

		$(bp).bind('beforeOpen', function() {
			$self.closeBtnPanels();
			$.each(bps, function() { this.buttonBlur() });
		});

		$(bp).bind('afterClose', function() {
			$.each(bps, function() { this.buttonIdle() });
		});

		return bp;
	}

	function getActiveBtnPanel() {
		var active;
		$.each(this.bps, function() { if(this.opened) { active = this; return false; } return true; });
		return active;
	}

	function _panelOp(name, op) {
		if(op == "closeAll") {
			$.each(bps, function() { this.closePanel() });
			return;
		}

		var p = bps[name];
		if(!p) return;

		if(op == "open") return p.open();
		if(op == "close") return p.closePanel();
		if(op == "get") { return p }
	}

	function blur() {
		$self.closeBtnPanels();
	}

	function _checkExtClick(event) {
		if($self.panelsLocked) return;

		var $targ = $(event.target);
		if($targ.parents('.buttonPanel_button').length || $targ.hasClass('.buttonPanel_button')) {
			return false;
		}
		if($targ.parents('.buttonPanel_panel').length == 0 && !$targ.hasClass('.buttonPanel_panel')) {
			$self.blur();
		}
	}

	// methods
	this.addBtnPanel = addBtnPanel;

	this.hide = function() { this.$domContainer.hide() }
	this.show = function()  { this.$domContainer.show() }
	this.blur = blur;

	this.getBtnPanel = function(name) { return _panelOp(name, "get") }
	this.openBtnPanel = function(name) { return _panelOp(name, "open") }
	this.closeBtnPanel = function(name) { return _panelOp(name, "close") }
	this.closeBtnPanels = function() { return _panelOp(name, "closeAll") }
	this.lockPanels = function(doLock) { this.panelsLocked = doLock ? true : false };

	// props
	this.panelsLocked = false;
	this.bps = bps;

	$(document).mousedown(_checkExtClick);
};

// }}}
// {{{ $SA.optionUI()

$SA.optionUI = function(options) {
	var $self = this;

	if(!options.formId) return;

	var $node = $(
		'<div class="content">' +
			'<h5>Change Search Defaults</h5>' +
			'Use these buttons to manipulate the default values that appear when you visit the search form.' +
		'</div>'
	);

	var $ddef = $('<div style="margin-left:24px;" />').appendTo($node);
	var $form = $(options.formId);

	var $divDiagSetDefs = $(
		'<div id="diagSetDefs" title="Set Defaults">' +
		'Please confirm that you want to use the current values in the search ' +
		'form as your new personal default form values.  If you continue, each time you visit the search form it will appear exactly as it does now.' +
		'<p><b>This will overwrite your existing default form values.</b></p>' +
		'</div>'
	).hide().appendTo($node).dialog({
		autoOpen:false, resizable:false, width:350, modal:true,
		buttons: {
			Cancel: function() { $(this).dialog('close') },
			OK: function() {
				$form.ajaxSubmit({
					type:"POST",
					dataType:'text',
					url:'/f/search/opt/set_default',
					success: function(d,s) { $self._onSetDef(d,s); $divDiagSetDefs.dialog('close'); },
					error: function(x,s,e) { $self._onSetDefFail(x,s,e); alert("Failed to update default!  Try again or cancel.") }
				});
			}
		}
	});

	var $divDiagClrDefs = $(
		'<div id="diagClrDefs" title="Clear Defaults">' +
		'Please confirm that you want to reset the search form defaults.' +
		'<p><b>This will delete any custom default form values you have set previously!</b></p>' +
		'</div>'
	).hide().appendTo($node).dialog({
		autoOpen:false, resizable:false, width:350, modal:true,
		buttons: {
			Cancel: function() { $(this).dialog('close') },
			OK: function() {
				$.ajax({
					cache:false,
					type:"POST",
					dataType:'text',
					url:'/f/search/opt/clear_default',
					success: function(d,s) { $self._onSetDef(d,s); $divDiagClrDefs.dialog('close'); },
					error: function(x,s,e) { $self._onSetDefFail(x,s,e); alert("Failed to update default!  Try again or cancel.") }
				});
			}
		}
	});

	var $divBtnSetDefs = $('<div class="buttonPanel_button" id="btnSetDefaults">Set As Default</div>').appendTo($ddef).click(function() { $divDiagSetDefs.dialog('open') });
	var $divBtnClrDefs = $('<div class="buttonPanel_button" id="btnClrDefaults">Clear Defaults</div>').appendTo($ddef).click(function() { $divDiagClrDefs.dialog('open') });

	// methods
	this._onSetDef = function(d,s) {
		console.debug("set default ok");
	};

	this._onSetDefFail = function(x,s,e) {
		console.debug("set default FAIL");
	};

	// init

	// properties;
	this.$domContainer = $node;
};

// }}}
// {{{ $SA.saveUI()
$SA.saveUI = function() {
	var $self = this;

	var $node = $(
		'<div class="content">' +
			'<h5>Save Slots</h5>' + 
			'Use save slots to store a search form for later use.' +
		'</div>'
	);
	var $ul = $('<ul class="saveSlots" />').appendTo($node);
	var $divHelp = $('<div>Click a slot you want to save the search form to...</div>').appendTo($node);
	var $divLoading = $('<div class="saveUI_loading">Loading slot data...</div>').appendTo($node);
	var $divCtl = $(
		'<div class="saveUI_ctl">' +
			'<div class="saveUI_help">Enter a name for this save slot and click &quot;Save&quot;.</div>' +
			'<div class="saveUI_button buttonPanel_button">Save</div>' +
			'<input type="text" value="" maxlength="12">' +
		'</div>'
	).hide().appendTo($node);

	var $divReload = $('<div id="saveUI_reload" title="Refetch slot data"></div>').click(function() {
		if($self.busy) return;
		$self.selectNone();
		$self.setBusy(true);
		$($self).trigger("clickReload");
	}).appendTo($node);

	var $inputLabel = $("input", $divCtl);
	$inputLabel.focus(function() { $inputLabel.select() });
	$inputLabel.keypress(function(e) {
		if(e.keyCode == 13)
			$btnSave.click();
	});
	var $btnSave = $("div.saveUI_button", $divCtl);
	$btnSave.click(function() {
		if($self.busy) return;
		$($self).trigger("clickSave", { slot:$self.selectedSlot, label:$inputLabel.val() });
	});

	this.reset = function() {
		if(this.busy) return;
		$divCtl.hide();
		$divLoading.hide();
		$divHelp.show();
		$self.selectNone();
		$($self).trigger('changed');
	};

	// methods
	this.setSlotLabel = function(n, txt) {
		var $li = this.slots[n];
		if(!$li) return;
		$li.removeClass("empty");
		//$("label", $li).empty().append(txt);
		$("label", $li).text(txt);
	};

	this.setBusy = function(busy) {
		$self.busy = busy ? true : false;
		if(busy) {
			$node.addClass('busy');
			$inputLabel.attr('disabled', true);
		} else {
			$node.removeClass('busy');
			$inputLabel.attr('disabled', false);
		}
	};

	this.selectNone = function() {
		$("li", $ul).removeClass("selected");
		$divCtl.hide();
		$self.selectedSlot = null;
	};

	this.selectSlot = function(n) {
		$self.selectNone();
		var $li = $self.slots[n];
		var nv = $("label", $li).text();
		if($li.hasClass("empty")) nv = "Save #" + n;
		$li.addClass("selected");
		$inputLabel.val(nv).select();
		$self.selectedSlot = n;
	};

	this.emptySlot = function(n) {
		this.setSlotLabel(n, 'Empty');
		this.slots[n].addClass("empty");
	};

	this.emptySlots = function() {
		for(var i = 1; i <= this.n_slots; i++) { $self.emptySlot(i) }
	};

	this.handleBeforeLoad = function() {
		$divHelp.hide();
		$divLoading.show();
		$self.setBusy(true);
		$($self).trigger('changed');
	};

	this.handleLoad = function(r) {
		var slotdata = r.data.slots;
		$.each(slotdata, function(k) { $self.setSlotLabel(k, this.label.toString()) });
		$divHelp.show();
		$divLoading.hide();
		this.setBusy(false);
		$($self).trigger('changed');
	};

	this.handleSlotClick = function() {
		if($self.busy) return;
		var n = $(this).attr('slotNumber');
		$self.selectSlot(n);
		$divLoading.hide();
		$divHelp.hide();
		$divCtl.show();
		$inputLabel.select();
		$($self).trigger('changed');
	};

	// props
	this.selectedSlot = null;
	this.busy = false;
	this.slots = [];
	this.n_slots = 20;
	this.$domContainer = $node;
	this.$domSlots = $ul;
	this.$domCtl = $divCtl;

	// init
	for(var i = 1; i <= this.n_slots; i++) {
		var $li = $('<li id="saveSlot' + i + '"></li>').appendTo($ul);
		$li.click(this.handleSlotClick);
		$li.append('<b>' + i + '</b><label />');
		$li.attr('slotNumber', i);
		$li.addClass(i > this.n_slots/2 ? 'rightCol' : 'leftCol');
		if(i == this.n_slots/2 + 1) $li.addClass('break');
		this.slots[i] = $li;
		this.emptySlot(i);
	}
};

// }}}
// {{{ $SA.loadUI()
$SA.loadUI = function() {
	var $self = this;

	var $node = $(
		'<div class="content">' +
			'<h5>Load Slot</h5>' +
			'Click on a slot below to load the saved search form.' +
		'</div>'
	);

	var $ul = $('<ul class="saveSlots" />').appendTo($node);
	var $divLoading = $('<div class="saveUI_loading">Loading slot data...</div>').appendTo($node);

	var $divReload = $('<div id="saveUI_reload" title="Refetch slot data"></div>').click(function() {
		if($self.busy) return;
		$self.setBusy(true);
		$($self).trigger("clickReload");
	}).appendTo($node);

	// methods
	this.setSlotLabel = function(n, txt) {
		var $li = this.slots[n];
		if(!$li) return;
		$li.removeClass("empty");
		$("label", $li).text(txt);
	};

	this.setBusy = function(busy) {
		$self.busy = busy ? true : false;
		if(busy) {
			$node.addClass('busy');
		} else {
			$node.removeClass('busy');
		}
	};

	this.handleBeforeLoad = function() {
		$divLoading.show();
		$self.setBusy(true);
		$($self).trigger('changed');
	};

	this.handleLoad = function(r) {
		var slotdata = r.data.slots;
		$.each(slotdata, function(k) { $self.setSlotLabel(k, this.label.toString()) });
		$divLoading.hide();
		this.setBusy(false);
		$($self).trigger('changed');
	};

	this.emptySlot = function(n) {
		this.setSlotLabel(n, 'Empty');
		this.slots[n].addClass("empty");
	};

	this.emptySlots = function() {
		for(var i = 1; i <= this.n_slots; i++) { $self.emptySlot(i) }
	};

	this.handleSlotClick = function() {
		var $a = $(this).children("a");
		window.location = $a.attr('href');
	};

	// props
	this.busy = false;
	this.slots = [];
	this.n_slots = 20;
	this.$domContainer = $node;
	this.$domSlots = $ul;

	// init
	var urlbase = '/f/search/';
	for(var i = 1; i <= this.n_slots; i++) {
		var $li = $('<li class="loadSlot" id="loadSlot' + i + '"></li>').appendTo($ul);
		$li.click(this.handleSlotClick);
		$li.append('<a href="' + urlbase + i + '"><b>' + i + '</b><label /></a>');
		$li.attr('slotNumber', i);
		$li.addClass(i > this.n_slots/2 ? 'rightCol' : 'leftCol');
		if(i == this.n_slots/2 + 1) $li.addClass('break');
		this.slots[i] = $li;
		this.emptySlot(i);
	}
};

// }}}
// {{{ $SA.slotManager()
;(function($) {
	$SA.slotManager = function(options) {
		this.loaded = false;
		this.slotData = {};

		var _defaults = {
			urlLoad: '/f/search/loadslots',
			urlSave: null,
			formId: null
		};
		$.extend(this, _defaults);
		$.extend(this, options);
	};

	$.extend($SA.slotManager.prototype, {
		_onLoad: function(data, status) {
			this.loaded = true;
			this.slotData = data;
			$(this).trigger('loaded', { data:data });
		},
		_onLoadFail: function(xhr, status, errType) {
			this.loaded = false;
			this.slotData = {};
			$(this).trigger('loadFail', { status:status, error:errType });
		},

		_onSave: function(data, status) {
			$(this).trigger('saved', data);
		},
		_onSaveFail: function(xhr, status, errType) {
			$(this).trigger('saveFail', { status:status, error:errType });
		},

		getSlotData: function() {
			return this.slotData;
		},

		loadSlotData: function() {
			var $self = this;
			$(this).trigger("beforeLoad");
			$.ajax({
				cache:false,
				url:this.urlLoad,
				type:"GET",
				dataType:"json",
				error: function(x,s,e) { $self._onLoadFail(x,s,e) },
				success: function(d,s) { $self._onLoad(d,s) }
			});
		},

		saveSlot: function(n, label) {
			var $self = this;
			var $form = $(this.formId.toString());
			$form.ajaxSubmit({
				type:"POST",
				dataType:'json',
				url: '/f/search/save/' + n,
				success: function(d,s) { $self._onSave(d,s) },
				error: function(x,s,e) { $self._onSaveFail(x,s,e) },
				beforeSubmit: function(data, $f, opt) {
					data.push({ name:'slotLabel', value:label });
				}
			});
		}
	});
})(jQuery);

// }}}
// {{{ $SA.searchButton()
;(function($) {
	$SA.searchButton = function(options) {
		var $self = this;
		var _defaults = {
			replaceNode:null,
			formId:null
		};

		$.extend(this, _defaults);
		$.extend(this, options);

		function setBusy(state) {
			if(state) {
				$self.busy = true;
				$self.$divButton.addClass('busy');
			} else {
				$self.busy = false;
				$self.$divButton.removeClass('busy');
			}
		}

		function handleClick() {
			var $form = $($self.formId);
			setBusy(true);

			$form.ajaxSubmit({
				dataType: 'json',
				type:"POST",
				error: function(xhr,err,exc) {
					setBusy(false);
					if(msg) $($self).trigger('searchError');
				},
				success: function(data) {
					var msg = data.message;
					if(data.results) {
						if(data.results > 0) {
							window.location = '/f/search/result?qid=' + data.queryid;
							return;
						} else {
							msg = "No results were found matching your search.";
						}
					}

					if(msg) $($self).trigger('searchMessage', msg);
					setBusy(false);
				}
			});
		};

		this.click = function() { $self.handleClick() }; 
		this.$divButton = $('<div class="buttonPanel_button searchButton">Search &raquo;</div>');
		this.$divButton.click( this.click );
		$(this.replaceNode).replaceWith(this.$divButton);

		this.handleClick = handleClick;

	};
})(jQuery);

// }}}

// {{{ $.searchDrill()
;(function($) {
	var busy = false;
	var $dnodes;

	function drill(qid, type, targetId, newWindow) {
		if(busy === true) return;
		busy = true;
		$.ajax({
			type:"POST",
			url:'/f/search/result/drill',
			cache:false,
			data:"type=" + type + "&id=" + targetId + "&qid=" + qid,
			dataType:"text",
			error: function(xhr, status, errThrown) {
				alert("Could not get results for query");
				$dnodes.removeClass("busy");
				busy = false;
				if(newWindow) {
					var t = 'Could not load results!';
					var ss = '<style type="text/css">html,body{font-family:"Arial",sans-serif;color:red;}</style>';
					newWin.document.write('<html><head><title>' + t + '</title>' + ss + '</head><body><h2>' + t + '</h2>Try again or just give up.</body></html>');
				}
			},
			success: function(data) {
				var tWin = newWindow ? newWindow : window;
				tWin.location.replace('/f/search/result?qid=' + data);
				$dnodes.removeClass("busy");
				busy = false;
			}
		});
	}

	$.fn.extend({
		searchDrillResult: function(type, qid, ids) {
			return this.each(function(index) {
				$(this).addClass("drill_link");
				$(this).click(function(event) {
					$dnodes.addClass("busy");
					var newWin;
					if(event.ctrlKey) {
						newWin = window.open('', 'drillWin'+index+'_'+Math.floor(Math.random()* 10000).toString());
						var t = 'Loading results...';
						var ss = '<style type="text/css">html,body{font-family:"Arial",sans-serif;}</style>';
						newWin.document.write('<html><head><title>' + t + '</title>' + ss + '</head><body><h2>' + t + '</h2>Please think about unicorns while you wait for your search results.</body></html>');
					}
					drill(qid, type, ids[index], newWin);
					event.stopPropagation();
					return false;
				});
			});
		}
	});

	$SA.searchDrillInit = function(type, qid, ids) {
		$dnodes = $("tr.result .drill").searchDrillResult(type, qid, ids);
	};

	$SA.searchDrill = function(options) {
		var $self = this;
		var _defaults = {
			replaceNode:null,
			formId:null
		};

		$.extend(this, _defaults);
		$.extend(this, options);

	};
})(jQuery);
// }}}


var ForumTree = function(ele) {
	this.init(ele);
};

$.extend(ForumTree.prototype, {
	node: null,
	node_title: null,
	node_tree: null,
	node_buttons: null,
	node_inputs: null,
	node_count: null,
	node_forumids: null,
	depth: 0,
	n_levels: 0,
	n_leaves: 0,
	leaves: null,

	init: function(node) {
		this.init_node(node);
		this.init_buttons();
		this.node_forumids = $("input#uf_forumids");
	},

	init_branches: function(treedata) {
		this.leaves = new Object();
		this._make_branch(this.node_tree, treedata, true);
		this.set_depth(2);

		$("li label", this.node_tree).click($.hitch(this, function(e) {
			var li = $(e.currentTarget).parent();
			return this.click_node(li);
		}));

		$.each($("li", this.node_tree).add(this.node_tree), $.hitch(this, function(i,n) {
			$(n).children("a.sfc_toggle_selected").attr("title", $.hitch(this, function() { return this._get_select_cap(n, true) }));
		}));

		$(this).trigger("tree_init");
	},

	init_node: function(node) {
		this.node = node;
		this.node_title = $("<div><h4/><span/></" + "div>").addClass("title").get(0);
		this.node_buttons = $("<div/>").addClass("buttonbar").get(0);
		this.node_tree = $("<div/>").addClass("forum_select").get(0);
		this.node_inputs = $("<div/>");
		this.node_count = $("span", this.node_title);

		this.set_title("Forum Tree");
		this.set_count_selected();

		$(this.node).empty();
		$(this.node).append(this.node_title);
		$(this.node).append(this.node_buttons);
		$(this.node).append(this.node_tree);
		$(this.node).append(this.node_inputs);
		return node;
	},

	is_all_selected: function() {
		return this.n_leaves == $("li.selected", this.node_tree).size();
	},

	toggle_node_selected: function(node) {
		if(!node) return;
		if($(node).is(".selected")) {
			$("li", node).add(node).removeClass("selected");
			$("li", node).add(node).addClass("deselected");
		} else {
			$("li", node).add(node).removeClass("deselected");
			$("li", node).add(node).addClass("selected");
		}

		$.each($("li", node).add(node), $.hitch(this, function(i,n) {
			$(n).children("a.sfc_toggle_selected").attr("title", $.hitch(this, function() { return this._get_select_cap(n, !$(n).is(".selected")) }));
		}));
		
		this.set_count_selected();
	},

	toggle_node_closed: function(node) {
		if(!node) return;
		$(node).toggleClass("closed");
		$.each($("li", node).add(node), $.hitch(this, function(i,n) {
			$("a.sfc_toggle_closed", n).attr("title", ($(n).is(".closed") ? "Expand" : "Collapse") + " this subforum");
		}));
	},

	expand_all: function() { this.set_depth(this.n_levels) },
	collapse_all: function() { this.set_depth(1) },

	set_depth: function(n) {
		if(n < 1) n = 1;
		if(n > this.n_levels) return;
		this.depth = n;
		var bsel = $("li", this.node_tree);
		$(bsel).removeClass("closed");
		$.each($("li[depth=" + n + "]", this.node_tree), $.hitch(this, function(i, node) {
			this.toggle_node_closed(node);
		}));
	},

	title_for_nodes: function(nodes) { return $("label span", nodes).text() },

	depth_ascend: function() { this.set_depth(this.depth + 1) },
	depth_descend: function() { this.set_depth(this.depth - 1) },

	show: function() { $(this.node).show() },
	hide: function() { $(this.node).hide() },
	set_title: function(s) { $("h4", this.node_title).text(s) },
	set_count_selected: function(n) {
		if(!n) n = this.count_selected();
		$("span", this.node_title).text("(" + n + " selected)")
	},
	count_subforums: function(node) { return $("li", node).size() },
	count_selected: function() { return $("li.selected", this.node_tree).size() },

	click_node: function(node) {
		$(node).toggleClass("selected").removeClass("deselected");
		$.each($("li", node).add(node), $.hitch(this, function(i,n) {
			if(!$(n).is(".selected")) this.deselect_node(n);
			$(n).children("a.sfc_toggle_selected").attr("title", $.hitch(this, function() { return this._get_select_cap(n, !$(n).is(".selected")) }));
		}));
		this.set_count_selected();
		this.freeze();
		return false;
	},

	deselect_node: function(node) {
		$(node).addClass("deselected");
		$.each($("li", node).add(node), $.hitch(this, function(i,n) {
			$(n).children("a.sfc_toggle_selected").attr("title", $.hitch(this, function() { return this._get_select_cap(n, true) }));
		}));
	},

	thaw: function() {
		var ids = $(this.node_forumids).val().split(/,/);
		this.select_forumids(ids);
	},

	freeze: function() {
		var fz = this.is_all_selected() ? "" : this.get_selected_forumids().join(',');
		$(this.node_forumids).val(fz);
	},

	select_forumids: function(ids) {
		$("li", this.node_tree).removeClass("selected").addClass("deselected");
		$.each(ids, $.hitch(this, function(i, forumid) {
			this.select_node(this.leaves[forumid]);
		}));
		this.set_count_selected();
		this.freeze();
	},

	select_node: function(node) {
		if(!node) return;
		$(node).removeClass("deselected").addClass("selected");
		$("a.sfc_toggle_selected", node).attr("title", $.hitch(this, function() { return this._get_select_cap(node, false) }));
	},

	select_all: function() {
		$("li", this.node).removeClass("deselected").addClass("selected");
		this.set_count_selected();
		this.freeze();
	},

	select_none: function() {
		$("li", this.node).removeClass("selected").addClass("deselected");
		this.set_count_selected();
		this.freeze();
	},

	_get_select_cap: function(node, isSelect) {
		return (isSelect ? "S" : "Des") + "elect this forum and its " + this.count_subforums(node) + " subforums";
	},

	init_buttons: function() {
		var div = this.node_buttons;
		$(div).append($('<a id="fb_select_none" />'));
		$(div).append($('<a id="fb_select_all" />'));
		$(div).append($('<a id="fb_expand_all" />'));
		$(div).append($('<a id="fb_collapse_all" />'));
		$(div).append($('<a id="fb_expand_one" />'));
		$(div).append($('<a id="fb_collapse_one" />'));

		$("a#fb_select_none").attr("title", "De-select all forums");
		$("a#fb_select_all").attr("title", "Select all forums");
		$("a#fb_collapse_all").attr("title", "Collapse all subforums");
		$("a#fb_expand_all").attr("title", "Expand all subforums");
		$("a#fb_collapse_one").attr("title", "Collapse tree by one level");
		$("a#fb_expand_one").attr("title", "Expand tree by one level");

		$("a#fb_select_none").click($.hitch(this, function() { this.select_none() }));
		$("a#fb_select_all").click($.hitch(this, function() { this.select_all() }));
		$("a#fb_collapse_all").click($.hitch(this, function() { this.collapse_all() }));
		$("a#fb_expand_all").click($.hitch(this, function() { this.expand_all() }));
		$("a#fb_collapse_one").click($.hitch(this, function() { this.depth_descend() }));
		$("a#fb_expand_one").click($.hitch(this, function() { this.depth_ascend() }));
	},

	_make_branch: function(attachPoint, node, isTop) {
		var ul = $("<ul>");
		$(attachPoint).append(ul);
		if(isNaN(this._depth)) this._depth = 0;
		if(this._depth > this.n_levels) this.n_levels = this._depth;
		this._depth++;

		$.each(node.children, $.hitch(this, function(i, cnode) {
			var li = $("<li />");
			$(li).append("<label><span>" + cnode.title + "</" + "span></" + "label>");
			$(li).addClass("tree_depth" + this._depth);
			if(cnode.is_container) {
				$(li).addClass("container");
				if(isTop) $(li).addClass("top");
				
				// expansion link
				var link_expand = $('<a class="sfc_toggle_closed"/>');
				$(link_expand).html("&nbsp;");
				$(link_expand).click($.hitch(this, function() {
					this.toggle_node_closed(li);	
					return false;
				})).attr("title", "Collapse this subforum");
				$("label", li).append(link_expand);

				// select node link
				var link_selchld = $('<a class="sfc_toggle_selected" />');
				$(link_selchld).hover(
					function() { $(li).addClass("hover"); return false; },
					function() { $(li).removeClass("hover"); return false; }
				);
				$(link_selchld).click($.hitch(this, function() {
					this.toggle_node_selected(li);
					$(li).removeClass("hover");
					return false;
				}));
				$(li).append(link_selchld);
			}
			this.n_leaves++;
			this.leaves[cnode.forumid] = $(li).get(0);
			$(li).attr("forumid", cnode.forumid);
			$(li).attr("parentid", node.forumid);
			$(li).attr("depth", this._depth);
			$(ul).append(li);
			this._make_branch(li, cnode, false);
		}));
		this._depth--;
	},

	get_selected_forumids: function() {
		return $.map($("li.selected", this.node_tree), function(n) { return $(n).attr("forumid") });
	},

	make_inputs: function() {
		$(this.node_inputs).empty();
		var ids = this.get_selected_forumids();
		$.each(ids, $.hitch(this, function(i, forumid) {
			var input = $("<input />");
			$(input).attr("type", "hidden");
			$(input).attr("name", "forumids[]");
			$(input).attr("value", forumid);
			$(this.node_inputs).append(input);
		}));
		return ids;
	}
});


$SA.userFilterCtl = function(node) {
	var $self = this;

	function input_focus() {
		$(document.body).bind('click', this, this.test_blur);
		if(!this.changed) $(this.userbox).val('');
		$(this.nodeAdd).addClass("active");
		$(this.userbox).one('change', $.hitch(this, function() { this.changed = true }));
		return false;
	};

	function input_blur() {
		if(this.changed == false || $(this.userbox).val().match(/^\s*$/)) {
			$(this.userbox).val('type a username');
			this.changed = false;
		}
		$(this.nodeAdd).removeClass("active");
		if(!this.selected) $(this.buttonAdd).hide();
	};

	function test_blur(e) {
		if(!($(".ui_useradd, .ui_useradd *").filter(function() { return this == e.target }).length > 0)) {
			e.data.input_blur();
			$(document.body).unbind("click", e.data.test_blur);
		}
	};

	this.max_users = 10;
	function commitUser(user) {
		if(!(user || user[0])) {
			alert("select a valid user first");
			return false;
		}

		// remove this user if he already exists
		this.removeUser(user[0]);

		if(this.committed.length >= this.max_users) {
			alert("sorry, no more than " + this.max_users + " usernames are allowed");
			return false;
		}

		if(!(user[2] || user[3])) {
			alert("you must check at least one of the checkboxes below");
			return false;
		}

		this.committed.push(user);
		$(this).trigger("userCommitted", [ user ]);

		$(this.userbox).val("");
		this.selected = null;
		this.changed = false;
		$(this.buttonAdd).hide();
		this.input_blur();

		this.updateUserids();

		return true;
	};

	function removeUser(userid) {
		var $self = $(this);
		this.committed = $.grep(this.committed, function(cuser) {
			if(cuser[0] == userid) {
				$self.trigger("userRemoved", [ cuser ]);
				return false;
			}
			return true;
		});
		this.updateUserids();
	};

	this.updateUserids = function() {
		// update the hidden input
		var uidstrs = [];
		$.each(this.committed, function() {
			var f = 0 + (this[2]?1:0) + (this[3]?2:0);
			uidstrs.push(this[0] + '<' + this[1] + '<' + f);
		});
		$(this.inputUserids).val(uidstrs.join('>'));
	};

	function selectUser(userid, username) {
		this.selected = [ userid, username ];
		$(this.buttonAdd).show();
	};

	this.initUAC = function(url, sel) {
		this.uc = new $SA.userComplete(url, sel);
		this.uc.autocompleter.bind("userSelected", $.hitch(this, function(e,data) { this.selectUser(data.userid, data.username) }));
	};

	this.getUserIDs = function() {
		var ids = [];
		$.each(this.committed, function() { ids.push(this[0]) });
		return ids;
	};

	this.thaw = function() {
		var s = $(this.inputUserids).val();
		if(!(s.length > 0)) return;
		var $self = this;
		$.each(s.split(/>/), function() {
			var user = this.split(/</);
			user[3] = user[2] & 2;
			user[2] = user[2] & 1;
			if(user && user[0] && user[0] > 0)
				$self.commitUser(user);
		});
	};

	// props
	this.uc = null;
	this.selected = null;
	this.committed = [];
	this.node = node;
	this.nodeAdd = $("div.ui_useradd", node);
	this.nodeList = $(this.nodeAdd).children("#userfilter_list");
	this.userbox = $("input#username_filter", this.nodeAdd);
	this.changed = false;
	this.addOnEnter = true;

	// methods
	this.input_blur = input_blur;
	this.test_blur = test_blur;
	this.input_focus = input_focus;
	this.selectUser = selectUser;
	this.commitUser = commitUser;
	this.removeUser = removeUser;

	// init
	this.buttonAdd = $('<input type="button" value="Add" class="uf_add">').insertAfter(this.userbox).click($.hitch(this, function() {
		var user = this.selected;
		user[2] = $("#uf_opts").children("input#uf_posts:checked").get(0) ? true : false,
		user[3] = $("#uf_opts").children("input#uf_quotes:checked").get(0) ? true : false
		this.commitUser(user)
	})).hide();

	this.userbox.keypress($.hitch(this, function(e) {
		if(e.which == 13) {
			if(this.addOnEnter && this.selected) {
				this.buttonAdd.click();
				this.userbox.blur();
			}
			return;
		}

		$(this.buttonAdd).hide();
		this.selected = null;
	}));
	this.userbox.click($.hitch(this, function() { this.selected = null }));
	this.inputUserids = $("input#uf_userids").get(0);

	this.userbox.focus($.hitch(this, this.input_focus));
	this.input_blur();
	$(node).show();
};

$SA.userFilters = function(sel) {
	function addUser(userid, username, getPosts, getQuotes) {
		var sel = [];
		if(getPosts) sel.push('posts');
		if(getQuotes) sel.push('quotes');
		var $self = $(this);
		$('<li userid="' + userid + '"><span title="' + userid + '">' + username+ '</span> <i>(' + sel.join(', ') + ')</i><a class="remb" title="Remove filter for ' + username + '">&nbsp;</a></li>')
		.appendTo(this.node)
		.children(".remb")
		.click(function(e) { $self.trigger("clickedRemove", [ userid ]) })
		.hover(
			function() { $(this).css("opacity", "0.75") },
			function() { $(this).css("opacity", "0.25") }
		);
	};

	function removeUser(userid) {
		$(this.node).children("li[userid='" + userid + "']").remove();
	};

	this.node = $(sel);
	this.addUser = addUser;
	this.removeUser = removeUser;
};

$SA.userComplete = function(acurl, sel) {
	var node = $(sel);

	function parse(data) {
		var parsed = [];
		var rows = data.split("\n");
		for(var i=0; i < rows.length; i++) {
			var row = $.trim(rows[i]);
			if(row) {
				row = row.split("<>");
				parsed[parsed.length] = { data: row, value: row[0], result: this.formatResult ? this.formatResult(row[0]) : row[0] };
			}
		}
		return parsed;
	};

	function formatItem(data, i, n) {
		return '<div>' + data[0] + '</' + 'div><i>&lt;' + data[1] + '&gt;</' + 'i>';
	};

	function formatResult(username) {
		return username.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&quot;/g, '"');
	};

	function handleResult(event, item) {
		var user = { username:item[0], userid:item[1] };
		node.trigger("userSelected", [ user ]);
	};

	var acopt = { max:30, mustMatch:false, minChars:1, formatItem:formatItem, parse:parse, formatResult:formatResult, extraParams:{timestamp:0} };
	var ac = node.autocomplete(acurl, acopt).result(handleResult);

	return {
		acurl:acurl,
		selector:sel,
		autocompleter:ac
	};
};


;(function($) {
	$SA.searchFormInit1= function() {
		// clunky stuff to init the forumtree mess
		$(document).ready(function() {
			$.getJSON("https://dl.dropboxusercontent.com/u/17019326/myjson", null, function(datatree) {
				var ftree = new ForumTree($("#forum_filters"));
				$("div.searchform").width($("div.searchform").width() + $(ftree.node).width());
				ftree.init_branches(datatree);
				ftree.set_title("Forum Filters");
				ftree.thaw();
				if(!ftree.get_selected_forumids().length)
					ftree.select_all();
				ftree.show();
			});
		});

		// init the user filter control
		$(document).ready(function() {
			var ufctl = new $SA.userFilterCtl($("#filter_usernames"));
			ufctl.initUAC('/f/json/usercomplete', "input#username_filter");
			var uf = new $SA.userFilters("ul#userfilter_list");
			$(ufctl).bind("userCommitted", function(e,d) { uf.addUser(d[0], d[1], d[2], d[3]) });
			$(ufctl).bind("userRemoved", function(e,d) { uf.removeUser(d[0]) });
			$(uf).bind("clickedRemove", function(e,userid) { ufctl.removeUser(userid) });
			ufctl.thaw();
		});

		// init the search UI
		var panelAPSel = 'div.searchform div.inner';
		$(document).ready(function() {
			var bpSave = new $SA.buttonPanel({ btnHtml:'Save', btnId:'btnSave', panelAttachTo:panelAPSel });
			var bpLoad = new $SA.buttonPanel({ btnHtml:'Load', btnId:'btnLoad', panelAttachTo:panelAPSel });
			var bpOpt = new $SA.buttonPanel({ btnHtml:'Options', btnId:'btnOpt', panelAttachTo:panelAPSel, panelId:'panelOpt' });

			var bpgroup = new $SA.buttonPanelGroup({ attachTo:'#bpleft' });
			bpgroup.addBtnPanel('save', bpSave);
			bpgroup.addBtnPanel('load', bpLoad);
			bpgroup.addBtnPanel('options', bpOpt);
			bpgroup.show();

			// slotManager handles save/load of slot data
			var slotMan = new $SA.slotManager({
				formId:'form.searchquery',
				urlLoad:'/f/search/loadslots'
			 });

			// options ui
			var uiOpt = new $SA.optionUI({ formId:'form.searchquery' });
			bpOpt.setContent(uiOpt.$domContainer);
			$(uiOpt.$divDiagSetDefs).bind('dialogopen', function() { bpgroup.lockPanels(true) });
			$(uiOpt.$divDiagClrDefs).bind('dialogopen', function() { bpgroup.lockPanels(true) });
			$(uiOpt.$divDiagSetDefs).bind('dialogclose', function() { bpgroup.lockPanels(false); bpgroup.closeBtnPanels(); });
			$(uiOpt.$divDiagClrDefs).bind('dialogclose', function() { bpgroup.lockPanels(false); bpgroup.closeBtnPanels(); });

			// setup load button
			var uiLoad = new $SA.loadUI();
			bpLoad.setContent(uiLoad.$domContainer);
			$(uiLoad).bind('changed', function() { bpLoad.alignPanel() });
			$(uiLoad).bind('clickReload', function() { slotMan.loadSlotData() });

			// setup save button
			var uiSave = new $SA.saveUI({ formId:'form.searchquery' });
			bpSave.setContent(uiSave.$domContainer);
			$(bpSave).bind('panelClosed', function() { uiSave.reset() });
			$(uiSave).bind('changed', function() { bpSave.alignPanel() });
			$(uiSave).bind('clickReload', function() { slotMan.loadSlotData() });
			$(uiSave).bind('clickSave', function(event, data) {
				uiSave.setBusy(true);
				slotMan.saveSlot(data.slot, data.label);
			});

			// hookup slot manager to ui events
			$(slotMan).bind('loadFail', function() { alert("load slots failed") });
			$(slotMan).bind('beforeLoad', function() {
				uiSave.handleBeforeLoad()
				uiLoad.handleBeforeLoad()
			});
			$(slotMan).bind('loaded', function(event, data) {
				uiSave.handleLoad(data);
				uiLoad.handleLoad(data);
			});
			$(slotMan).bind('saveFail', function(event, data) {
				alert('Could not save to slot');
				uiSave.reset();
				uiSave.setBusy(false);
			});
			$(slotMan).bind('saved', function(event, data) {
				uiSave.setSlotLabel(data.slot, data.label);
				uiLoad.setSlotLabel(data.slot, data.label);
				uiSave.setBusy(false);
				uiSave.reset();
			});

			// load slot data from server
			slotMan.loadSlotData();
		});

		// init the search button handler
		$(document).ready(function() {
			console.log("doing anything?")
			var bSearch = new $SA.searchButton({ replaceNode:"input.searchbutton", formId:"form.searchquery" });
			$('input#sfkw').keypress(function(e) {
				switch(e.keyCode) {
					case 13: bSearch.click(); break;
				}
			});
			var $d = $('<div id="srDialog"/>').appendTo(document.body).dialog({
				autoOpen: false,
				modal: true,
				title: "Search Response",
				minHeight: 60,
				resizable: false,
				draggable: false,
				dialogClass: "searchUI_srmdiag",
				buttons: { OK: function() { $d.dialog('close') } }
			});
			$(bSearch).bind('searchMessage', function(e,msg) { $d.text(msg).dialog('open') });
			$(bSearch).bind('searchError', function(e) { $d.text("An error occurred while searching.  Try again.").dialog('open') });
		});
	};
})(jQuery);

