(function ($) {
    'use strict';

    $.fn.extend({
        personAutoComplete: function () {
            $(this).each(function () {
                var $element = $(this);
                var createUrl = $element.data('create-url');

                $element.dropdown('setting', 'allowAdditions', true);
                $element.dropdown('setting', 'hideAdditions', false);

                $element.dropdown('setting', 'onAdd', function (addedValue, addedText, $addedChoice) {
                    if ($addedChoice.hasClass('addition')) {
                        var lastName = getLastNameByConcatenatedNames(addedText);
                        var firstName = getFirstNameByConcatenatedNames(addedText);

                        postPerson($addedChoice, createUrl, lastName, firstName);

                        console.log(firstName);
                        console.log(lastName);
                    }
                });
            });
        }
    });

    function postPerson($addedChoice, url, lastName, firstName) {
        $.ajax({
            type: "POST",
            url: url,
            data: {
                lastName: lastName,
                firstName: firstName
            },
            dataType: "json",
            accept: "application/json",
            success: function (data) {

            }
        });
    }

    /**
     * @param names
     *
     * @return string
     */
    function getLastNameByConcatenatedNames(names) {
        var nameParts = names.split(' ');

        if (nameParts.length === 1) {
            return nameParts[0];
        }

        nameParts.reverse();
        nameParts.pop();

        return nameParts.join(' ');
    }

    /**
     * @param names
     *
     * @return string|null
     */
    function getFirstNameByConcatenatedNames(names) {
        var lastName = getLastNameByConcatenatedNames(names);
        var firstName = names.replace(lastName, '').trim();

        return firstName !== "" ? firstName : null;
    }

})(jQuery);
