import { BlogInput } from "../BlogInput";
import { FormTitle } from "./FormTitle";

export function FormSection() {
  return (
    <>
      <FormTitle title="Poster un commentaire" />
      <p>
        Votre e-mail ne sera pas rendu public. Les champs marqués d'un * sont
        obligatoires
      </p>
      <BlogInput
        name="message"
        key={0}
        label="Votre message"
        placeholder="Votre message ..."
        required={false}
        type="text"
      />
      <BlogInput
        name="Prénom"
        key={1}
        label="Votre prénom"
        placeholder="Votre prénom"
        required={true}
        type="text"
      />
      <BlogInput
        name="e-mail"
        key={2}
        label="Votre e-mail"
        placeholder="Votre e-mail"
        required={false}
        type="email"
      />
      <BlogInput
        name="website"
        key={3}
        label="Votre website"
        placeholder="Votre website ..."
        required={false}
        type="url"
      />
      <BlogInput
        name="newsletter"
        key={4}
        label="Cochez cette case pour vous abonner à la newsletter"
        required={false}
        type="checkbox"
      />

      <select name="options" id="answer-select">
        <option value="">--Please choose an option--</option>
        <option value="Ne pas s'abonner">Ne pas s'abonner</option>
        <option value="Tous les commentaires">Tous les commentaires</option>
        <option value="Seulement les réponses à mes commentaires">
          Seulement les réponses à mes commentaires
        </option>
      </select>
    </>
  );
}
