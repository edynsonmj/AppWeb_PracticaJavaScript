(function () {
    var init = function () {
        var orderForm = document.forms.order,
            saveBtn = document.getElementById('saveOrder'),
            saveBtnClicked = false;
        var saveForm = function () {
            if (!('formAction' in
                document.createElement('input'))) {
                var formAction = saveBtn.getAttribute('formaction');
                orderForm.setAttribute('action', formAction);
            }
            saveBtnClicked = true;
        };
        saveBtn.addEventListener('click', saveForm, false);
        calculateTotals();
        var qtyListeners = function () {
            var i = 0,
                ln = qtyFields.length;
            for (; i < ln; i++) {
                qtyFields[i].addEventListener('input',
                    calculateTotals, false);
                qtyFields[i].addEventListener('keyup',
                    calculateTotals, false);
                if (!!qtyFields[i].valueAsNumber) {
                    itemQty = qtyFields[i].valueAsNumber || 0;
                } else {
                    itemQty = parseFloat(qtyFields[i].value) || 0;
                }
            }
        };
        qtyListeners();
    };
    window.addEventListener('load', init, false);
})();