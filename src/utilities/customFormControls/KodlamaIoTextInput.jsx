import { useField } from 'formik';
import React from 'react'
import { FormField,Label } from 'semantic-ui-react';

export default function KodlamaIoTextInput({...props}) {

    console.log(props);
    // formik te ilgli input elemanınızla ilgili bilgi toplayabilmenizi sağlayan hook var. bunun adı useField
    // arkaplanda reflect api kullanıyor.  => reflect api bak.
    const [field,meta] =useField(props) // props ile gelen field için. onu da name den yakalıyor

    console.log(field)  // onchange'i value u vs. veriyor field
    console.log(meta)  // bir hava var mı? varsa onun değeri bu diyor. touch ise dokunuldu demek. oraya girdim ve çıktım demek
    // ürün fiyatı zorunlu kısmı, o touch a dokunulduğu için çıkıyor. meta= hata var mı yok mu o bilgiyi veriyor.
    return (
     <FormField error={meta.touched && !!meta.error}>
         <input {...field} {...props} />
         {meta.touched && !!meta.error ? (
              <Label pointing basic color="red" content={meta.error}></Label>
         ):null}
     </FormField>
    )
}

// !!meta.error metinsel ifadede metin varsa true yoksa false yap demek.