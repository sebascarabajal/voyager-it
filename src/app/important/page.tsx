import React from 'react'

export default function Important() {
    return (
        <main className='min-h-screen'>
            <div className="flex flex-col items-center p-6">
                <h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Thanks.</h1>
                <div className="border border-gray-300 p-4 w-3/4 text-center">
                    Voyager es una empresa ficticia creada por un grupo de estudiantes de Ingenier&iacute;a Inform&aacute;tica como parte del proyecto de la asignatura Teleinform&aacute;tica I. Esta página recopila y muestra el conocimiento adquirido
                    con el objetivo de que compañeros, profesores, futuros alumnos y entusiastas del tema puedan ver y compartir nuestro trabajo. Agradecemos tu visita. Muchas gracias. Atentamente,
                    El equipo de VoyagerIT.
                </div>
                <div className="border border-gray-300 p-4 w-3/4 text-center mt-6">
                    Voyager is a fictitious company created by a group of Computer Engineering students as part of a project for the course Teleinformatics I. This page collects and showcases the knowledge
                    acquired with the aim that peers, professors, future students, and enthusiasts of the subject can view and share our work. We appreciate your visit. Thank you very much. Sincerely,
                    The VoyagerIT Team.
                </div>
            </div>
        </main>
    )
}
