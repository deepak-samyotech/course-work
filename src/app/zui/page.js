"use client";
import React, { useState } from "react";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Document, Page, pdfjs } from 'react-pdf';
import { LiaSearchMinusSolid, LiaSearchPlusSolid } from "react-icons/lia";
import { AiOutlineExpand } from "react-icons/ai";
import { BiCollapseAlt } from "react-icons/bi";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaCheckCircle } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../components/ui/accordion";

import "./index.css"

// Set the worker source (required for react-pdf to work)
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Score = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1.0);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const percentage = (13 / 20) * 100;

    return (
        <>
            <div className="flex mt-6 gap-2">
                <Card className="w-full max-w-[972px] mx-auto rounded-3xl">
                    <div className="p-4 flex justify-between items-center max-h-[50px] border-b bg-slate-300 rounded-t-3xl">
                        <h2 className="text-sm bg-white px-3 py-1 font-semibold  rounded-2xl">The standard Lorem Ip...</h2>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <LiaSearchMinusSolid
                                    className="-rotate-90 cursor-pointer"
                                    onClick={() => setScale(scale - 0.1)}
                                />
                                <span>{Math.round(scale * 100)}%</span>
                                <LiaSearchPlusSolid
                                    className="-rotate-90 cursor-pointer"
                                    onClick={() => setScale(scale + 0.1)}
                                />
                            </div>

                            <div className="p-1 bg-white rounded-full">
                                <AiOutlineExpand />
                            </div>

                            <div className="flex items-center gap-1 bg-white rounded-xl px-3 py-1">
                                <BiCollapseAlt />
                                <span>Collapse</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 max-h-[600px] overflow-y-auto bg-white flex justify-center scrollbar-hidden">
                        <Document
                            file="/The standard Lorem Ipsum passage.pdf"
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            {Array.from(new Array(numPages), (el, index) => (
                                <Page
                                    key={`page_${index + 1}`}
                                    pageNumber={index + 1}
                                    scale={scale}
                                    className="drop-shadow-lg mb-3 h-fit"

                                />
                            ))}
                        </Document>
                    </div>
                </Card>

                <div>
                    <Card className="bg-white p-3 flex items-center gap-10 rounded-3xl max-w-[356px] max-h-[104px]">
                        <div>
                            <p className="text-[#3D404B] text-[14px]">
                                Overall Score
                            </p>
                            <p className="text-[#3D404B] text-[24px] font-bold">
                                Remark : <span className="text-green-400">Good</span>
                            </p>
                            <p className="text-[#98A1BB] text-[12px]">
                                Evaluated on 12 jul 2024
                            </p>
                        </div>

                        <div className="w-16 h-16">
                            <CircularProgressbar
                                value={percentage}
                                text={`13/20`}
                                styles={buildStyles({
                                    textSize: '24px',
                                    pathColor: `#34D399`, // Tailwind's green-400
                                    textColor: '#111827',  // Tailwind's gray-900
                                    trailColor: '#E5E7EB', // Tailwind's gray-200
                                    backgroundColor: '#34D399', // Tailwind's green-400
                                })}
                            />
                        </div>
                    </Card>

                    <Accordion type="single" collapsible className="mt-3">
                        <AccordionItem value="item-1" className="bg-white rounded-3xl max-h-[82px]  px-3">
                            <AccordionTrigger className="no-underline">
                                <div className="flex items-center gap-3">
                                    <div className="w-14 h-14">
                                        <CircularProgressbar
                                            value={percentage}
                                            text={`13/20`}
                                            styles={buildStyles({
                                                textSize: '24px',
                                                pathColor: `#34D399`, // Tailwind's green-400
                                                textColor: '#111827',  // Tailwind's gray-900
                                                trailColor: '#E5E7EB', // Tailwind's gray-200
                                                backgroundColor: '#34D399', // Tailwind's green-400
                                            })}
                                        />
                                    </div>

                                    <div className="text-left   ">
                                        <p className="text-[#98A1BB] text-[12px]">
                                            Criteria: A
                                        </p>
                                        <p className="text-[#3D404B] text-[16px] font-semibold">
                                            Understanding Knowledge Questions
                                        </p>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="bg-white px-3 rounded-b-3xl">
                                <div>
                                    The provided document does not meet the criteria for an IB Extended Essay.
                                    It appears to be a collection of JavaScript interview questions and answers,
                                    rather than a structured essay with a clear research question, methodology,
                                    and focused topic. It lacks the essential components of an extended essay such
                                    as a defined topic, research question, and appropriate methodology.
                                </div>
                                <div className="">
                                    <p className="text-[20px] font-extrabold mt-4">
                                        Strengths
                                    </p>
                                    <div className="list-disc p-5 mt-2 bg-[#ddf3ea] text-[#3D404B] text-[14px] font-medium rounded-xl border-2 border-[#3CC28A]">
                                        <p className="flex items-center gap-2">
                                            <FaCheckCircle size={25} className="text-[#3CC28A]"/>
                                            Demonstrates a good understanding of the prescribed title and the associated knowledge questions.
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <FaCheckCircle size={25} className="text-[#3CC28A]"/>
                                            Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.
                                        </p>
                                    </div>
                                </div>

                                <div className="">
                                    <p className="text-[20px] font-extrabold mt-4">
                                        Scope of Improvements
                                    </p>
                                    <div className="list-disc p-5 mt-2 bg-[#f5f1e6] text-[#3D404B] text-[14px] font-medium rounded-xl border-2 border-[#F9C94E]">
                                        <p className="flex items-center gap-2">
                                            <RiErrorWarningFill size={25} className="text-[#F9C94E]"/>
                                            Demonstrates a good understanding of the prescribed title and the associated knowledge questions.
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <RiErrorWarningFill size={25} className="text-[#F9C94E]"/>
                                            Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.
                                        </p>
                                    </div>
                                </div>

                                <div>

                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
            </div>
        </>
    )

}

export default Score;