;(function($) {
	$SA.searchFormInit= function() {
		// clunky stuff to init the forumtree mess
		$(document).ready(function() {
			$.getJSON("/f/json/forumtree1", null, function(datatree) {
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