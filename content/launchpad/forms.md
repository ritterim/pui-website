---
title: Forms
---

## Putting it Together

Here's an example of a larger responsive form using the block layout.

<form action="" class="form block-container tablet-up-2 lg-tablet-up-3 laptop-up-4 desktop-up-6 blocks mb-3 p-2">
  <div class="block">
    <label for="first-name-h" class="form__field">First Name
      <input id="first-name-h" type="text" placeholder="First Name">
    </label>
  </div>
  <div class="block">
    <label for="last-name-h" class="form__field">Last Name
      <input id="last-name-h" type="text" placeholder="Last Name">
    </label>
  </div>
  <div class="block">
    <label for="dob-h" class="form__field">Birthday
      <input id="dob-h" type="date">
    </label>
  </div>
  <div class="block">
    <label for="zipcode-h" class="form__field">ZIP Code
      <input id="zipcode-h" type="tel" placeholder="e.g.90012" pattern="^\d{5,6}(?:[-\s]\d{4})?$">
    </label>
  </div>
  <div class="block">
    <fieldset class="form__field">
      <legend>Choose</legend>
      <div class="form__option-group">
        <input class="form__checkbox" id="gender-this-one-h" type="checkbox">
        <label for="gender-this-one-h">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-check pi-heavy'></i>
          </div>
          This One
        </label>
        <input class="form__checkbox" id="gender-that-one-h" type="checkbox">
        <label for="gender-that-one-h">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-check pi-heavy'></i>
          </div>
          That One
        </label>
      </div>
    </fieldset>
  </div>
  <div class="block">
    <fieldset class="form__field">
      <legend>Gender</legend>
      <div class="form__option-group">
        <input class="form__radio" id="gender-male-h" type="radio" name="gender">
        <label for="gender-male-h">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-circle-solid'></i>
          </div>
          Male
        </label>
        <input class="form__radio" id="gender-female-h" type="radio" name="gender">
        <label for="gender-female-h">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-circle-solid'></i>
          </div>
          Female
        </label>
      </div>
    </fieldset>
  </div>
  <div class="block">
    <label for="option-h" class="form__field">Option
      <div class="form__select-wrapper">
        <select name="Option Select" id="option-h">
          <option value="Option1">Option 1</option>
          <option value="Option2">Option 2</option>
          <option value="Option3">Option 3</option>
          <option value="Option4">Option 4</option>
          <option value="Option5">Option 5</option>
          <option value="Option6">Option 6</option>
        </select>
      </div>
    </label>
  </div>
  <div class="block">
    <fieldset class="form__field">
      <legend>Are You</legend>
      <div class="toggle">
        <div class="toggle__content">
          <input id="tall-h" type="radio" checked name="height">
          <label for="tall-h"><i class='pi-check pi-heavy'></i> Tall</label>
        </div>
        <div class="toggle__content">
          <input id="short-h" type="radio" name="height">
          <label for="short-h"><i class='pi-check pi-heavy'></i> Short</label>
        </div>
      </div>
    </fieldset>
  </div>
  <div class="block">
    <label for="date-h" class="form__field has-icon">Date
      <input id="date-h" type="date">
      <i class="pi-calendar text--skyblue background--white"></i>
    </label>
  </div>
  <div class="block">
    <label for="time-h" class="form__field">Your Time
      <input id="time-h" type="time" placeholder="10:00 AM">
    </label>
  </div>
  <div class="block">
    <div class="form__field form__button-group">
      <button class="button button--lg">Submit</button>
    </div>
  </div>
</form>

<div class="mt-3 mb-4">
{{< highlight html >}}
<form action="" class="form block-container tablet-up-2 lg-tablet-up-3 laptop-up-4 desktop-up-6 blocks mb-3 p-2">
  <div class="block">
    <label for="first-name-h" class="form__field">First Name
      <input id="first-name-h" type="text" placeholder="First Name">
    </label>
  </div>
  <div class="block">
    <label for="last-name-h" class="form__field">Last Name
      <input id="last-name-h" type="text" placeholder="Last Name">
    </label>
  </div>
  <div class="block">
    <label for="dob-h" class="form__field">Birthday
      <input id="dob-h" type="date">
    </label>
  </div>
  <div class="block">
    <label for="zipcode-h" class="form__field">ZIP Code
      <input id="zipcode-h" type="tel" placeholder="e.g.90012" pattern="^\d{5,6}(?:[-\s]\d{4})?$">
    </label>
  </div>
  <div class="block">
    <fieldset class="form__field">
      <legend>Choose</legend>
      <div class="form__option-group">
        <input class="form__checkbox" id="gender-this-one-h" type="checkbox">
        <label for="gender-this-one-h">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-check pi-heavy'></i>
          </div>
          This One
        </label>
        <input class="form__checkbox" id="gender-that-one-h" type="checkbox">
        <label for="gender-that-one-h">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-check pi-heavy'></i>
          </div>
          That One
        </label>
      </div>
    </fieldset>
  </div>
  <div class="block">
    <fieldset class="form__field">
      <legend>Gender</legend>
      <div class="form__option-group">
        <input class="form__radio" id="gender-male-h" type="radio" name="gender">
        <label for="gender-male-h">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-circle-solid'></i>
          </div>
          Male
        </label>
        <input class="form__radio" id="gender-female-h" type="radio" name="gender">
        <label for="gender-female-h">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-circle-solid'></i>
          </div>
          Female
        </label>
      </div>
    </fieldset>
  </div>
  <div class="block">
    <label for="option-h" class="form__field">Option
      <div class="form__select-wrapper">
        <select name="Option Select" id="option-h">
          <option value="Option1">Option 1</option>
          <option value="Option2">Option 2</option>
          <option value="Option3">Option 3</option>
          <option value="Option4">Option 4</option>
          <option value="Option5">Option 5</option>
          <option value="Option6">Option 6</option>
        </select>
      </div>
    </label>
  </div>
  <div class="block">
    <fieldset class="form__field">
      <legend>Are You</legend>
      <div class="toggle">
        <div class="toggle__content">
          <input id="tall-h" type="radio" checked name="height">
          <label for="tall-h"><i class='pi-check pi-heavy'></i> Tall</label>
        </div>
        <div class="toggle__content">
          <input id="short-h" type="radio" name="height">
          <label for="short-h"><i class='pi-check pi-heavy'></i> Short</label>
        </div>
      </div>
    </fieldset>
  </div>
  <div class="block">
    <label for="date-h" class="form__field has-icon">Date
      <input id="date-h" type="date">
      <i class="pi-calendar text--skyblue background--white"></i>
    </label>
  </div>
  <div class="block">
    <label for="time-h" class="form__field">Your Time
      <input id="time-h" type="time" placeholder="10:00 AM">
    </label>
  </div>
  <div class="block">
    <div class="form__field form__button-group">
      <button class="button button--lg">Submit</button>
    </div>
  </div>
</form>
{{< /highlight >}}
</div>
